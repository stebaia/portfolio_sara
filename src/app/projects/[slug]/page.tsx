import Image from 'next/image'
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
import GradientText from '@/components/gradientText'
import Center from '@/components/center'

export async function getBlogPostMetadata(slug: string): Promise<BlogPostData> {
	try {
	  const file = await import("@/articles/" + slug + ".mdx");

		if (file?.metadata) {
			if (!file.metadata.title || !file.metadata.description) {
				throw new Error(`Missing some required metadata fields in: ${slug}`);
			}

			return {
				slug,
				metadata: file.metadata,
			};
		} else {
			throw new Error(`Unable to find metadata for ${slug}.mdx`);
		}
	} catch (error: any) {
		console.error(error?.message);
		return notFound();
	}
}

export type PostMetadata = Metadata & {
	title: string;
	description: string;
	image: string;
	date: string;
	role: string;

};

export type BlogPostData = {
	slug: string;
	metadata: Metadata;
};


export default async function BlogPage({ params }: BlogPageProps) {
	const BlogMarkdown = dynamic(() => import('@/articles/' + params.slug + ".mdx"));
	const { metadata } = await getBlogPostMetadata(params.slug);
	const title = `${metadata.title ?? ""}`;

	return (
		<div>
			<Center>
				<div className="flex md:flex-row flex-col justify-between mb-12">

					<div>
						<p className="text-3xl md:text-4xl mt-6 font-bold">
							<GradientText>{title}</GradientText>
						</p>

						<div>
							<p className="font-bold text-4xl md:text-6xl mt-4">
								{metadata.description}
							</p>
						</div>
					</div>

				  <div className='flex flex-row gap-20 items-center md:mt-2 mt-6'>
						<div>
						  <p className="md:text-3xl text-xl  font-bold">Role </p>
							<p className=" text-slate-500 italic">{metadata.role} </p>
						</div>
						<div>
							<p className="md:text-3xl text-xl font-bold">Timeline </p>
							<p className="  text-slate-500 italic">{metadata.date} </p>
						</div>
					</div>
				</div>
			</Center>

			<div className="image-container" style={{ width: '100%', height: '400px', overflow: 'hidden', position: 'relative' }}>
				<Image
					src={metadata.image}
					alt="Spring Framework"
					layout="fill"
					objectFit="cover"
					className="full-width-image"
				/>
			</div>

				<Center>
					<article className="prose  max-w-none prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white break-word">
						<BlogMarkdown />
					</article>
				</Center>


		</div >
	);
}
