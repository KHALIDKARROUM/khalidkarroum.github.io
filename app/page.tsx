import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
} from 'lucide-react';
import { ContactCTA } from '@/components/portfolio/ContactCTA';
import { GithubIcon } from '@/components/portfolio/BrandIcons';
import { PipelineVisual } from '@/components/portfolio/PipelineVisual';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ResumeLink } from '@/components/portfolio/ResumeLink';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { SkillsGrid } from '@/components/portfolio/SkillsGrid';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';

export default function Home() {
  const [primaryRole, secondaryRole] = profile.role.split(' & ');

  return (
    <main id="main-content" className="home-page" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Link className="availability-badge" href="/contact">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </Link>
          <div className="hero-identity">
            <span className="monogram" aria-hidden="true">
              KK
              <span />
            </span>
            <div>
              <p>{profile.name}</p>
              <span>
                <MapPin size={12} aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </div>
          <h1 id="hero-title">
            {primaryRole}
            {secondaryRole && (
              <>
                {' '}
                <span className="hero-ampersand">&</span>
                <span className="gradient-text">{secondaryRole}.</span>
              </>
            )}
          </h1>
          <p className="hero-description">{profile.positioning}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#projects">
              View my projects <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <ResumeLink />
            <a
              className="button button-secondary"
              href={`mailto:${profile.email}`}
            >
              <Mail size={16} aria-hidden="true" /> Email me
            </a>
            <a className="button button-secondary" href={profile.github}>
              <GithubIcon size={17} />
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <a className="scroll-cue" href="#about">
            <ArrowDown size={13} aria-hidden="true" />
            SCROLL TO EXPLORE
          </a>
        </div>
        <PipelineVisual />
      </section>
      <section
        id="about"
        className="home-section about-personal-preview"
        aria-labelledby="about-title"
      >
        <div className="personal-preview-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2 id="about-title">
            Curious about data.
            <br />
            <span>Hands-on with ideas.</span>
          </h2>
          <p className="personal-preview-location">
            <MapPin size={13} aria-hidden="true" /> {profile.location}
          </p>
        </div>
        <div className="personal-preview-copy">
          <p>
            I’m {profile.name}. I work with data, machine learning, and
            software. What I enjoy is connecting the pieces: understanding a
            problem, testing an idea, and turning it into something useful.
          </p>
          <p>
            I’m drawn to financial data science, unusual patterns, and the
            challenge of making a model work as part of a real application.
            Building is how I put those interests into practice.
          </p>
          <Link className="text-link" href="/about">
            More about me <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section
        id="skills"
        className="home-section"
        aria-labelledby="skills-title"
      >
        <div className="section-header-row">
          <SectionHeading
            label="THE TOOLKIT"
            title="Skills"
            id="skills-title"
          />
          <Link className="text-link" href="/skills">
            Explore my skills <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <SkillsGrid />
      </section>
      <section
        id="projects"
        className="home-section"
        aria-labelledby="projects-title"
      >
        <div className="section-header-row">
          <SectionHeading
            label="SELECTED WORK"
            title="Projects"
            id="projects-title"
          />
          <Link className="text-link" href="/projects">
            All projects <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <ContactCTA>
        <p>{profile.availability}</p>
      </ContactCTA>
    </main>
  );
}
