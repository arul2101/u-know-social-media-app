import { createClient } from '@supabase/supabase-js'

// refactor this type
const supabaseURL: string | any = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKEY: string | any = process.env.NEXT_PUBLIC_SUPABASE_KEY;

const supabase = createClient(supabaseURL, supabaseKEY);

export default supabase;