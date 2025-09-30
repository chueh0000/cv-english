import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import Favicon from "/public/favicon.ico"
import AppleIcon from "/public/apple-icon.png"
import { MyAvatarImage } from "@/images";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
//   title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
//   description: RESUME_DATA.summary,
  icons: [
    { rel: 'icon', url: Favicon.src },
    { rel: 'apple-touch-icon', url: AppleIcon.src },
],
};

type Education = {
    school: string;
    degree: string;
    start?: string;
    end: string;
    description: string;
}
type Work = {
  company: string;
  link?: string;
  badges: readonly string[];
  title: string;
  start: string;
  end: string;
  description: string;
  // logo?: string;
};
type GroupProject = {
  title: string;
  link?: string;
  badges: readonly string[];
  where: string;
  start: string;
  end: string;
  description: string;
  // logo?: string;
};
type Extracurricular = {
  association: string;
  link?: string;
  badges: readonly string[];
  title: string;
  start: string;
  end: string;
  description: string;
  // logo?: string;
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-4xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            {/* <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p> */}
            <div className="flex-col gap-y-1 pt-5 font-mono text-sm text-muted-foreground">
            {/* <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden"> */}
              {RESUME_DATA.contact.email ? (
                <div>
                    <Button
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                        style={{ marginRight: '10px', marginBottom: '4px' }} // Add right and bottom margin to the Button
                        >
                        <a href={`mailto:${RESUME_DATA.contact.email}`}>
                            <MailIcon className="size-4" />
                        </a>
                    </Button>
                    <span>{RESUME_DATA.contact.email}</span>
                </div>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <div>
                    <Button
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                        style={{ marginRight: '10px', marginBottom: '4px' }} // Add right and bottom margin to the Button
                        >
                        <a href={`tel:${RESUME_DATA.contact.tel}`}>
                            <PhoneIcon className="size-4" />
                        </a>
                    </Button>
                    <span>{RESUME_DATA.contact.tel}</span>
                </div>
              ) : null}
              {RESUME_DATA.contact.social.map((social, index) => (
                <div key={index}>
                    <Button
                        key={social.name}
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                        style={{ marginRight: '10px', marginBottom: '4px' }} // Add right and bottom margin to the Button
                        >
                        <a href={social.url}>
                            <social.icon className="size-4" />
                        </a>
                    </Button>
                    <a className="" href={social.url}>{social.text}</a>
                </div>
              ))}
            </div>
            {/* <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div> */}
          </div>
          {RESUME_DATA.avatarUrl ? 
            <Avatar className="size-28">
                <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
                {/* <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback> */}
            </Avatar>
          : <Image
              src={MyAvatarImage}
              alt="My Avatar"
              width={120}
              height={167}
              className="relative flex shrink-0 overflow-hidden rounded-xl"
              // className="rounded shadow-lg mx-auto"
            />
          }
        </div>
        {/* <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section> */}
        {RESUME_DATA.jobObjectives.company ? 
            <Section>
            <h2 className="text-xl font-bold">Job Objectives</h2>
            <CardContent className="">{RESUME_DATA.jobObjectives.company}</CardContent>
                {RESUME_DATA.jobObjectives.positions ? 
                    <CardContent className="text-xs">
                    {(RESUME_DATA.jobObjectives.positions as string).split(',').map((line: string, index: number) => (
                        <div key={index}>
                        <span>&bull; {line}</span>
                        </div>
                    ))}
                    </CardContent>
                : null }
            </Section>
        : null}

        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education: Education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                        {education.start ? (<div>{education.start} - {education.end}</div>) : (education.end)}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="mt-2">{education.degree}</CardContent>
                {education.description ? (
                    <CardContent className="mt-2 text-xs" style={{ whiteSpace: 'pre-line' }}>
                        {education.description.split('\n').map((line, index, array) => (
                            <div key={index} style={{ marginBottom: index === array.length - 1 ? '10px' : '0' }}>
                            <span>&bull; {line}</span>
                            </div>
                        ))}
                    </CardContent>
                ) : null}
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Certificates</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.certificates.map((certificate) => {
              return <Badge key={certificate}>{certificate}</Badge>;
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Internship</h2>
          {RESUME_DATA.work.map((work: Work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {work.link ? (
                        <a className="underline" href={work.link}>
                            {work.company} 🔗
                        </a>
                      ) : (
                        <span>{work.company}</span>
                      )}

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  {work.title ? (
                        <h4 className="font-mono text-sm leading-none">
                            {work.title}
                        </h4>
                    ) : null}
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                    {work.description.split('\n').map((line, index, array) => (
                        <div key={index} style={{ marginBottom: index === array.length - 1 ? '10px' : '0' }}>
                        <span>&bull; {line}</span>
                        </div>
                    ))}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Group Project Experiences</h2>
          {RESUME_DATA.groupProjects.map((groupProject: GroupProject) => {
            return (
              <Card key={groupProject.title}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {groupProject.link ? (
                        <a className="underline" href={groupProject.link}>
                            {groupProject.title} 🔗
                        </a>
                      ) : (
                        <span>{groupProject.title}</span>
                      )}

                      <span className="inline-flex gap-x-1">
                        {groupProject.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {groupProject.start} - {groupProject.end ?? "Present"}
                    </div>
                  </div>

                  {groupProject.where ? (
                        <h4 className="font-mono text-sm leading-none">
                            {groupProject.where}
                        </h4>
                    ) : null}
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                    {groupProject.description.split('\n').map((line, index, array) => (
                        <div key={index} style={{ marginBottom: index === array.length - 1 ? '10px' : '0' }}>
                        <span>&bull; {line}</span>
                        </div>
                    ))}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        
        <Section>
          <h2 className="text-xl font-bold">Extracurricular Activities</h2>
          {RESUME_DATA.extracurricular.map((extracurricular: Extracurricular) => {
            return (
              <Card key={extracurricular.association}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {extracurricular.link ? (
                        <a className="underline" href={extracurricular.link}>
                            {extracurricular.association} 🔗
                        </a>
                      ) : (
                        <span>{extracurricular.association}</span>
                      )}

                      <span className="inline-flex gap-x-1">
                        {extracurricular.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {extracurricular.start} - {extracurricular.end ?? "Present"}
                    </div>
                  </div>

                  {extracurricular.title ? (
                        <h4 className="font-mono text-sm leading-none">
                            {extracurricular.title}
                        </h4>
                    ) : null}
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                    {extracurricular.description.split('\n').map((line, index, array) => (
                        <div key={index} style={{ marginBottom: index === array.length - 1 ? '10px' : '0' }}>
                        <span>&bull; {line}</span>
                        </div>
                    ))}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        
        {/* <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section> */}
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Mandarin Version",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
