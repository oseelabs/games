import { put } from "@vercel/blob";

const saveBlob = async (path: string, filename: string, content: string) => {
    const { url } = await put(`${path}/${filename}`, content, { access: 'public' });
    return url;
};

export default saveBlob;