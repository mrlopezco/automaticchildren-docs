import type { Metadata } from "next";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: {
	params: Promise<{ mdxPath?: string[] }>;
}) {
	const params = await props.params;
	const { metadata } = await importPage(params.mdxPath);
	return metadata as Metadata;
}

export default async function DocsPage(props: {
	params: Promise<{ mdxPath?: string[] }>;
}) {
	const params = await props.params;
	const result = await importPage(params.mdxPath);
	const { default: MDXContent, ...wrapperProps } = result;
	const components = getMDXComponents();
	const Wrapper = components?.wrapper;

	if (!Wrapper) {
		return <MDXContent {...props} params={params} />;
	}

	return (
		<Wrapper {...wrapperProps}>
			<MDXContent {...props} params={params} />
		</Wrapper>
	);
}
