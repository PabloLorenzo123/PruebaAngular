/**
 * @module DiscoverSectionController
 * @description Maneja la lógica de la sección descubre.
 */

const getDiscoverSectionArticles = async (req, res) => {
    const articles = [
        {
            id: 1,
            title: 'Por lo que suceda',
            url: 'https://www.segurosuniversal.com.do/tu-auto/'
        },
        {
            id: 2,
            title: 'Por si chocas',
            url: 'https://www.segurosuniversal.com.do/tu-auto/'
        }
    ]

    return res.json(articles);
}


module.exports = {
    getDiscoverSectionArticles
};
