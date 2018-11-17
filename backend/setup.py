import setuptools

try:  # for pip >= 10
    from pip._internal.req import parse_requirements as parse
except ImportError:  # for pip <= 9.0.3
    from pip.req import parse_requirements as parse


from setuptools import find_packages

requirements = lambda f: [str(i.req) for i in parse(f, session=False)]

setuptools.setup(
    name='shopping-app',
    version='0.0.1',
    author='Fernando Felix do Nascimento Junior',
    author_email='fernandofelix@copin.ufcg.edu.br',
    description='Shopping cart app',
    url='https://github.com/fernandojunior/shopping-app',
    platforms='any',
    license='None',
    packages=find_packages(),
    install_requires=requirements('requirements.txt'),
    include_package_data=True,
    zip_safe=False,
    entry_points={'scrapy': ['settings = art_spider.settings']}
)
