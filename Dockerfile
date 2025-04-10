

# Usar una imagen oficial de httpd (Apache)
FROM httpd:2.4-alpine

COPY ./dist/mycv/browser/ /usr/local/apache2/htdocs/

EXPOSE 8080
