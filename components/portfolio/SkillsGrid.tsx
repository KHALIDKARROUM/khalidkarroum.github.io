import Link from 'next/link';
import { skillEvidence, skillGroups, skillLogos } from '@/data/skills';
import { getProject } from '@/data/projects';
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Search,
} from 'lucide-react';

const icons = [BrainCircuit, Search, BarChart3, Database, Code2, GitBranch];

export function SkillsGrid() {
  return (
    <dl className="skills-list">
      {skillGroups.map((group, index) => {
        const Icon = icons[index % icons.length];
        const tools = group.items.filter((item) => skillLogos[item]);
        const concepts = group.items.filter((item) => !skillLogos[item]);
        return (
          <div className="skill-card" key={group.title}>
            <dt>
              <span className="skill-icon">
                <Icon size={21} aria-hidden="true" />
              </span>
              {group.title}
            </dt>
            <dd>
              <p>{group.description}</p>
              <ul className="skill-items">
                {[...tools, ...concepts].map((item) => {
                  const logo = skillLogos[item];
                  const evidence = skillEvidence[item];
                  const project = evidence
                    ? getProject(evidence.project)
                    : undefined;
                  const label = logo ? (
                    <span className="skill-tool-logo">
                      <img
                        src={logo}
                        alt={item}
                        width={56}
                        height={32}
                        loading="lazy"
                      />
                    </span>
                  ) : (
                    item
                  );
                  return (
                    <li
                      key={item}
                      className={logo ? 'skill-tool' : 'skill-concept'}
                      title={logo ? item : undefined}
                    >
                      {!logo && <span aria-hidden="true" />}
                      {project ? (
                        <Link
                          className="skill-evidence-link"
                          href={`/projects/${project.slug}${evidence.section ? '#' + evidence.section : ''}`}
                          aria-label={`${item} — see evidence in ${project.title}`}
                        >
                          {label}
                          <small>{project.title} ↗</small>
                        </Link>
                      ) : (
                        <span className="skill-familiarity">
                          {label}
                          <small>Familiarity</small>
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
