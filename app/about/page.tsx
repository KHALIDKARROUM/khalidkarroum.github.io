import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { BackToHome } from '@/components/portfolio/BackToHome';
import { GithubIcon, LinkedInIcon } from '@/components/portfolio/BrandIcons';
import { ResumeLink } from '@/components/portfolio/ResumeLink';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { languages, profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Khalid Karroum: his interests in data and machine learning, his hands-on approach to building, and what he’s working on now.',
};

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="inner-page about-page about-personal"
      tabIndex={-1}
    >
      <BackToHome />

      <header className="personal-introduction">
        <div className="personal-introduction-copy">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h1>
            Hi, I’m <span>Khalid.</span>
          </h1>
          <p className="personal-tagline">
            Curious about data.
            <br />
            Hands-on with ideas.
          </p>
          <p className="personal-lead">
            I work with data, machine learning, and software. What I enjoy is
            connecting the pieces: understanding a problem, testing an idea, and
            turning it into something useful.
          </p>
          <nav className="personal-socials" aria-label="Find me online">
            <a href={profile.github}>
              <GithubIcon size={16} /> GitHub{' '}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href={profile.linkedIn}>
              <LinkedInIcon size={16} /> LinkedIn{' '}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </nav>
        </div>

        <aside className="personal-now" aria-labelledby="personal-now-title">
          <p className="eyebrow" id="personal-now-title">
            <span className="personal-status" aria-hidden="true" /> ME, RIGHT
            NOW
          </p>
          <dl>
            <div>
              <dt>Based in</dt>
              <dd>
                <MapPin size={13} aria-hidden="true" /> {profile.location}
              </dd>
            </div>
            <div>
              <dt>Learning</dt>
              <dd>
                {education[0].degree}
                <span>{education[0].field}</span>
              </dd>
            </div>
            <div>
              <dt>Recent project</dt>
              <dd>
                <Link href={`/projects/${experience[0].projectSlug}`}>
                  {experience[0].project}{' '}
                  <ArrowUpRight size={12} aria-hidden="true" />
                </Link>
                <span>{experience[0].type} · {experience[0].company}</span>
              </dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>
                {languages
                  .map((language) => `${language.name} · ${language.level}`)
                  .join(' / ')}
              </dd>
            </div>
          </dl>
        </aside>
      </header>

      <section className="personal-section" aria-labelledby="curiosity-title">
        <h2 id="curiosity-title">
          What keeps <br />
          me curious.
        </h2>
        <div className="personal-section-body">
          <p>
            Problems where data helps make sense of something: understanding
            financial risk, spotting unusual patterns, or working out what a
            changing market is telling us.
          </p>
          <p>
            That’s what draws me to statistical modeling, anomaly detection, and
            financial data science. I also care about the software around a
            model: how it’s used, tested, and kept reliable.
          </p>
          <nav
            className="personal-interests"
            aria-label="Explore my interests through my work"
          >
            <Link href="/projects/aegis-credit">
              Financial data science{' '}
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/projects/netguard">
              Anomaly detection <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/skills">
              Machine learning systems{' '}
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </section>

      <section className="personal-section" aria-labelledby="mindset-title">
        <h2 id="mindset-title">
          How I like <br />
          to work.
        </h2>
        <div className="personal-section-body">
          <p>
            I like understanding why a result works, where it falls short, and
            whether it answers the original question. I start with a simple
            baseline, test my assumptions, and make the limitations clear.
          </p>
          <p>
            Building helps me learn. Connecting the data, the model, and the
            interface makes me think about details that a notebook on its own
            can miss.
          </p>
          <p className="personal-principle">
            Understand it. Test it. Make it useful.
          </p>
        </div>
      </section>

      <section
        className="personal-connect"
        aria-labelledby="personal-connect-title"
      >
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2 id="personal-connect-title">Have something in mind?</h2>
          <p>
            I’m open to conversations about data, machine learning, and things
            worth building. I’m also looking for a six-month PFE internship
            starting in {profile.internship.startDate}.
          </p>
        </div>
        <div className="personal-connect-actions">
          <Link className="button button-primary" href="/contact">
            Say hello <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <ResumeLink />
        </div>
      </section>
    </main>
  );
}
