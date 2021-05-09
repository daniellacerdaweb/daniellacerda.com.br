import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

export const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="text-gray-800">{text}</b>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="mt-5 text-gray-800">{children}</p>,
    [INLINES.HYPERLINK]: ({ data }: any, children) => (
      <a
        href={`${data.uri}`}
        className="border-solid border-2 border-yellow-500 text-yellow-500 py-3 px-6">
        {children}
      </a>
    )
  }
};

export const convertRichText = (json) => json && documentToReactComponents(json, options);
