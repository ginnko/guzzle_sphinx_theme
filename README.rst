===================
Ustack Sphinx Theme
===================

这个模板在 **guzzle_sphinx_theme** 的基础上修改而成，原模板地址：https://github.com/guzzle/guzzle_sphinx_theme

安装
============

通过pip安装::

    $ pip install ustack_sphinx_theme

或者下载代码后本地安装::

    $ python setup.py install

配置
=============

将以下代码加入配置文件conf.py中:

.. code-block:: python

    import ustack_sphinx_theme

    html_theme_path = ustack_sphinx_theme.html_theme_path()
    html_theme = 'ustack_sphinx_theme'

    # Register the theme as an extension to generate a sitemap.xml

    extensions.append("ustack_sphinx_theme")



其他扩展项:

.. code-block:: python

    import guzzle_sphinx_theme

    html_theme_path = guzzle_sphinx_theme.html_theme_path()
    html_theme = 'guzzle_sphinx_theme'

    # Register the theme as an extension to generate a sitemap.xml
    extensions.append("guzzle_sphinx_theme")

    # Guzzle theme options (see theme.conf for more information)
    html_theme_options = {

        # Set the path to a special layout to include for the homepage
        "index_template": "special_index.html",

        # Set the name of the project to appear in the left sidebar.
        "project_nav_name": "Project Name",

        # Set your Disqus short name to enable comments
        "disqus_comments_shortname": "my_disqus_comments_short_name",

        # Set you GA account ID to enable tracking
        "google_analytics_account": "my_ga_account",

        # Path to a touch icon
        "touch_icon": "",

        # Specify a base_url used to generate sitemap.xml links. If not
        # specified, then no sitemap will be built.
        "base_url": ""

        # Allow a separate homepage from the master_doc
        "homepage": "index",

        # Allow the project link to be overriden to a custom URL.
        "projectlink": "http://myproject.url",
    }

自定义布局
======================

你可以通过重写覆盖Jinja模板块实现自定义主题。比如，"layout.html"就包含几个可以重写或扩展的块

将"layout.html"文件放入你的项目的"/_templates"文件夹中。

.. code-block:: bash

    mkdir source/_templates
    touch source/_templates/layout.html

然后配置"conf.py"文件:

.. code-block:: python

    templates_path = ['_templates']

    

最后，编辑重写"source/_templates/layout.html":

::

    {# Import the theme's layout. #}
    {% extends "!layout.html" %}

    {%- block extra_head %}
    {# Add custom things to the head HTML tag #}
    {# Call the parent block #}
    {{ super() }}
    {%- endblock %}


注意：

  如果你正在使用Readthedocs，你可能会遇到当前不允许修改“layout.html”文件的问题.
