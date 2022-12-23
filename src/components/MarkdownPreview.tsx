import parse from 'html-react-parser';

interface MarkdownPreviewPropTypes {
  text: string | null
}

const MarkdownPreview = ({ text }: MarkdownPreviewPropTypes) => {
  return (
    <div className='markdown-body'>
      {parse(text || "")}
    </div>
  )
}

export default MarkdownPreview
