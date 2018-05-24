from setuptools import setup
from os import path

setup(
    name='ustack_sphinx_theme',
    version='0.0.1',
    description='Sphinx theme used by Ustack.',
    long_description=open('README.rst').read(),
    author='Yin Yang',
    author_email='yybnbn@126.com',
    url='https://github.com/unitedstack/guzzle_sphinx_theme',
    packages=['ustack_sphinx_theme'],
    include_package_data=True,
    install_requires=['Sphinx>1.3'],
    classifiers=(
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'Natural Language :: English',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python',
    ),
    entry_points = {
        'sphinx.html_themes': [
            'name_of_theme = ustack_sphinx_theme',
        ]
    },
)

