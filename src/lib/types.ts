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
export interface Post {
    slug: string,
    title: string,
    date: string,
    summary: string,
    tags: string[],
    week?: number,
    popular: boolean,
    draft: boolean,
    readingMinutes: number,
    content: string,
}
