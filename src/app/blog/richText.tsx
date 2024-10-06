'use client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function RichText({ richText }: any) {
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any) => (
                <p className="mb-3 text-justify">
                    {node.content.map((content: any, index: number) => (
                        <span key={index}>{content.value}</span>
                    ))}
                </p>
            ),
            [BLOCKS.HEADING_4]: (node: any) => (
                <h4 className="mb-4 font-bold text-2xl">
                    {node.content.map((content: any, index: number) => (
                        <span key={index}>{content.value}</span>
                    ))}
                </h4>
            ),
            [BLOCKS.UL_LIST]: (node: any) => (
                <ul className="list-disc ml-6">
                    {node.content.map((listItemNode: any, index: number) => (
                        <li className=' mb-3 text-justify' key={index}>
                            {listItemNode.content.map((paragraphNode: any, i: number) => (
                                paragraphNode.content.map((content: any, j: number) => (
                                    <span key={j}>{content.value}</span>
                                ))
                            ))}
                        </li>
                    ))}
                </ul>
            ),
            [BLOCKS.HR]: () => (
                <hr className="mt-6 mb-6" />
            ),
            
            
        },
    };

    return <>{documentToReactComponents(richText, options)}</>;
}
