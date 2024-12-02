export interface Project {
    title: string,
    subtitle: string,
    description: string,
    slug?: string,
    png?: string,
    gif?: string,
    markdown?: string,
    url?: string,
    github?: string,
    technologies: string[],
}