import { getTodos } from "$lib/vercel/supabase";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const todos = await getTodos();

    return {
        todos
    }
};
