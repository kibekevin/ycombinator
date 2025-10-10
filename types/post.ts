export type Author = {
  _id: number,
  name: string,
  image: string
}

export type Post = {
  _createdAt: string,
  views: number
  author: Author
  _id: number
  description: string
  image: string
  category: string
  title: string
}