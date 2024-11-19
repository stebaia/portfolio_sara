/**
 * @brief A simple component to render text content inside a paragraph element with styling.
 *
 * The `Paragraph` component is designed to display text content wrapped inside a `<p>` HTML element.
 * It accepts a `children` prop that contains the content to be displayed, which is passed as a `ReactElement`.
 * The component applies a predefined set of styles, including text size, color, and letter spacing, to the paragraph.
 *
 * @version 1.0
 * @date 2024-11-13
 *
 * @component Paragraph
 * @description The `Paragraph` component wraps the provided `children` inside a paragraph (`<p>`) element,
 * and applies specific styles to ensure proper text display. The component is useful for displaying body text
 * or other content that requires paragraph-level styling.
 *
 * @example
 * <Paragraph>
 *   This is a sample paragraph of text.
 * </Paragraph>
 */

/**
 * @interface ParagraphProps
 * @brief Props for the Paragraph component.
 * @property {ReactElement} children - The content to be displayed inside the paragraph element.
 * This can be any valid React element or text content that you want to display as a paragraph.
 */

/**
 * @component Paragraph
 * @brief Displays the provided content inside a styled paragraph.
 *
 * @param {ParagraphProps} props - The properties passed to the component.
 * @param {ReactElement} props.children - The content that will be rendered inside the paragraph.
 *
 * @returns {JSX.Element} - The rendered `Paragraph` component displaying the `children` inside a styled paragraph.
 */
import { ReactElement } from 'react';

interface ParagraphProps {
  children: ReactElement;
}
const Paragraph = ({ ...props }: ParagraphProps) => {
  return (
    <p className="text-xl text-slate-500 tracking-tight">{props.children}</p>
  );
};

export default Paragraph;
