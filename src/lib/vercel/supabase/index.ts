import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/private';

const supabase = createClient(
  env.SUPABASE_URL!,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const getTodos = async () => {
    const { data, error } = await supabase
    .from('todos')
    .select()

    if (error) throw error
    return data;
}

export {
    getTodos
}