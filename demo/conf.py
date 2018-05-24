import sys, os, subprocess

from sphinx.highlighting import lexers
from pygments.lexers.web import PhpLexer


project = u'UDS'
master_doc = 'index'
templates_path = ['_templates']
extensions = []
source_suffix = '.rst'
exclude_patterns = ['_build']
source_encoding = 'utf-8'
language = 'zh_CN'
# -- HTML theme settings ------------------------------------------------

html_show_sourcelink = False

# import ustack_sphinx_theme

# extensions.append("ustack_sphinx_theme")
# html_theme_path = ustack_sphinx_theme.html_theme_path()
html_theme = 'ustack_sphinx_theme'
html_theme_path = [ "../ustack_sphinx_theme/" ]

html_context = {
    "download_links": [
        {"PDF": "https://xxxxxxxxx.pdf"}
    ]
}

# theme options (see theme.conf for more information)
html_theme_options = {

}
