import { useEffect } from 'react';

interface MetaConfig {
    title: string;
    description: string;
    url: string;
    type?: string;
    lang?: string;
}

export function useDocumentMeta(meta: MetaConfig) {
    useEffect(() => {
        document.title = meta.title;
        document.documentElement.lang = meta.lang || 'fr-MA';

        const setMeta = (attr: string, name: string, content: string) => {
            const el = document.querySelector(`meta[${attr}="${name}"]`);
            if (el) el.setAttribute('content', content);
        };

        setMeta('name', 'description', meta.description);
        setMeta('property', 'og:title', meta.title);
        setMeta('property', 'og:description', meta.description);
        setMeta('property', 'og:url', meta.url);
        setMeta('property', 'og:type', meta.type || 'website');
    }, [meta.title, meta.description, meta.url, meta.type, meta.lang]);
}
