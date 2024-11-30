export interface Project {
    title: string,
    subtitle: string,
    description: string,
    slug?: string,
    thumbnail?: string,
    markdown?: string,
    url?: string,
    github?: string,
    technologies: string[],
}