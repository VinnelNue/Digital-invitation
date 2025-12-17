import { createClient } from '@supabase/supabase-js'

// Ganti dua nilai di bawah ini dengan data dari Dashboard Supabase
// (Settings > API)
const supabaseUrl = 'https://znboemkykzckwhgmjext.supabase.co'
const supabaseAnonKey = 'sb_publishable_L1sOmt77zlpQZ-ogL2-cOw_JvpTUnIT'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)