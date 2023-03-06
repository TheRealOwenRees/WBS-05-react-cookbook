import { createClient } from 'contentful';

export const useContentful = () => {
    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_PREVIEW_API_KEY,
        host: 'preview.contentful.com',
    })

    const getRecipies = async () => {
        try {
            const entries = await client.getEntries({
                content_type: 'cookbook',
                select: 'fields',
            })

            const sanitisedEntries = entries.items.map((item) => {
                const id = item.sys.id

                return {
                    ...item.fields,
                    id
                }
            })

            return sanitisedEntries
        } catch (e) {
            console.log(e)
        }
    }
    return { getRecipies }
}