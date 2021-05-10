import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

export const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="bold">{text}</b>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="paragraph">{children}</p>,
    [INLINES.HYPERLINK]: ({ data }: any, children) => (
      <a href={`${data.uri}`} className="hyperLink">
        {children}
      </a>
    )
  }
};

export const convertRichText = (json) => json && documentToReactComponents(json, options);
