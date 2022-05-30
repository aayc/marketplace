import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "UNDEFINED"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "UNDEFINED"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
