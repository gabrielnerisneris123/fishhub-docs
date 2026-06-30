export interface User {
  id: string
  email: string
  username: string
  full_name: string
  avatar_url: string | null
  banner_url: string | null
  bio: string | null
  city: string | null
  state: string | null
  is_premium: boolean
  is_fishery_owner: boolean
  created_at: string
  updated_at: string
}

export interface Catch {
  id: string
  user_id: string
  fishery_id: string | null
  species: string
  weight: number
  length: number | null
  bait: string
  equipment: string | null
  photo_url: string | null
  video_url: string | null
  notes: string | null
  caught_at: string
  created_at: string
  updated_at: string
}

export interface Fishery {
  id: string
  owner_id: string | null
  name: string
  slug: string
  description: string | null
  address: string | null
  city: string
  state: string
  latitude: number
  longitude: number
  phone: string | null
  instagram: string | null
  website: string | null
  opening_hours: Record<string, string> | null
  entry_price: number | null
  photos: string[]
  videos: string[]
  rules: string | null
  species_available: string[]
  is_verified: boolean
  created_at: string
  updated_at: string
}

export interface Post {
  id: string
  user_id: string
  catch_id: string | null
  content: string | null
  photo_url: string | null
  video_url: string | null
  likes_count: number
  comments_count: number
  created_at: string
  updated_at: string
}

export interface Review {
  id: string
  user_id: string
  fishery_id: string
  rating: number
  comment: string | null
  photo_url: string | null
  criteria: ReviewCriteria
  created_at: string
  updated_at: string
}

export interface ReviewCriteria {
  fish_quantity: number
  cleanliness: number
  restaurant: number
  bathroom: number
  service: number
  price: number
  structure: number
}

export interface Like {
  id: string
  user_id: string
  post_id: string
  created_at: string
}

export interface Comment {
  id: string
  user_id: string
  post_id: string
  parent_id: string | null
  content: string
  created_at: string
  updated_at: string
}

export interface Follow {
  id: string
  follower_id: string
  following_id: string
  created_at: string
}

export interface Notification {
  id: string
  user_id: string
  type: 'like' | 'comment' | 'follow' | 'mention'
  from_user_id: string | null
  post_id: string | null
  comment_id: string | null
  is_read: boolean
  created_at: string
}

export interface Species {
  id: string
  name: string
  scientific_name: string | null
  description: string | null
  max_weight: number | null
  photo_url: string | null
  created_at: string
}

export type Database = {
  public: {
    tables: {
      users: {
        Row: User
        Insert: Omit<User, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<User, 'id' | 'created_at' | 'updated_at'>>
      }
      catches: {
        Row: Catch
        Insert: Omit<Catch, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Catch, 'id' | 'created_at' | 'updated_at'>>
      }
      fisheries: {
        Row: Fishery
        Insert: Omit<Fishery, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Fishery, 'id' | 'created_at' | 'updated_at'>>
      }
      posts: {
        Row: Post
        Insert: Omit<Post, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Post, 'id' | 'created_at' | 'updated_at'>>
      }
      reviews: {
        Row: Review
        Insert: Omit<Review, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Review, 'id' | 'created_at' | 'updated_at'>>
      }
      likes: {
        Row: Like
        Insert: Omit<Like, 'id' | 'created_at'>
        Update: Partial<Omit<Like, 'id' | 'created_at'>>
      }
      comments: {
        Row: Comment
        Insert: Omit<Comment, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Comment, 'id' | 'created_at' | 'updated_at'>>
      }
      follows: {
        Row: Follow
        Insert: Omit<Follow, 'id' | 'created_at'>
        Update: Partial<Omit<Follow, 'id' | 'created_at'>>
      }
      notifications: {
        Row: Notification
        Insert: Omit<Notification, 'id' | 'created_at'>
        Update: Partial<Omit<Notification, 'id' | 'created_at'>>
      }
      species: {
        Row: Species
        Insert: Omit<Species, 'id' | 'created_at'>
        Update: Partial<Omit<Species, 'id' | 'created_at'>>
      }
    }
  }
}
