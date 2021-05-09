import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="mt-5">{children}</p>,
    [INLINES.HYPERLINK]: ({ data }: any, children) => (
      <a href={`${data.uri}`} className="bg-yellow-200 rounded-full py-3 px-6">
        {children}
      </a>
    ),
    [MARKS.BOLD]: (text) => <b className="font-semibold">{text}</b>
  }
};

export const convertRichText = (json) => json && documentToReactComponents(json, options);
