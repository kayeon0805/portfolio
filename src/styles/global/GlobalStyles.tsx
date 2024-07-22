import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-bg-color: #000000;
    --secondary-bg-color: #e4e4e4;

    --primary-text-color: #fff;
    --secondary-text-color: #000000;
    
	--primary-card-bg-color: #13161b;
	--secondary-card-bg-color: #f1f1f1;

    --nav-width: 80px;
  }

  html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	html {
		overflow-x: hidden;
	}
	img {
		width: 100%;
		height: 100%;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	button {
		cursor: pointer;
	}


	body {
		background: var(--primary-bg-color);
		color: var(--primary-text-color);
		transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
	}

	body.light {
		background: var(--secondary-bg-color);
		color: var(--secondary-text-color);
	}

	main {
		width: calc(100% - var(--nav-width));
		margin-left: var(--nav-width);

		${({ theme }) => theme.media('tablet')`
			width: 100%;
			margin-left: 0;
		`};
	}
`

export default GlobalStyle
