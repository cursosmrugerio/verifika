#!/bin/bash

# Script para descargar todas las imágenes del sitio Verifika
# Uso: bash download-images.sh

echo "======================================"
echo "Descargando imágenes de Verifika.mx"
echo "======================================"
echo ""

# Verificar que las carpetas existan
echo "Verificando estructura de carpetas..."
mkdir -p assets/logos
mkdir -p assets/clientes
mkdir -p assets/documentos
echo "✓ Carpetas creadas/verificadas"
echo ""

# Contador de éxitos y errores
SUCCESS=0
ERRORS=0

# Función para descargar con manejo de errores
download_file() {
    local url=$1
    local output=$2
    local name=$3

    echo "Descargando: $name..."
    if curl -f -L -o "$output" "$url" 2>/dev/null; then
        echo "✓ $name descargado exitosamente"
        ((SUCCESS++))
    else
        echo "✗ Error al descargar $name"
        ((ERRORS++))
    fi
}

# LOGOS
echo "======================================"
echo "Descargando Logos..."
echo "======================================"
download_file \
    "https://verifika.mx/wp-content/uploads/elementor/thumbs/LogoVerifikaTransparente-pu1qz6g5lu1m0tlzg0nl904ss2s3e0zhlvwtsu7k74.png" \
    "assets/logos/logo-verifika.png" \
    "Logo Verifika (color)"

download_file \
    "https://verifika.mx/wp-content/uploads/elementor/thumbs/Logo-Verifika-White-Trans-pu1r0bt1yjmcazerlq9o04v2zst31vxwy9prblt88w.png" \
    "assets/logos/logo-verifika-white.png" \
    "Logo Verifika (blanco)"

echo ""

# NOSOTROS
echo "======================================"
echo "Descargando Imagen Nosotros..."
echo "======================================"
download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/Verifika-Nosotros1.jpg" \
    "assets/nosotros.jpg" \
    "Imagen Nosotros"

echo ""

# CLIENTES
echo "======================================"
echo "Descargando Logos de Clientes..."
echo "======================================"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/ProAgro.jpg" \
    "assets/clientes/proagro.jpg" \
    "ProAgro"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/Seguros-Argos.jpg" \
    "assets/clientes/seguros-argos.jpg" \
    "Seguros Argos"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/SisNova.jpg" \
    "assets/clientes/sisnova.jpg" \
    "SisNova"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/XXI-Banorte.jpg" \
    "assets/clientes/xxi-banorte.jpg" \
    "XXI Banorte"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/AforeCoppel-1.jpg" \
    "assets/clientes/afore-coppel.jpg" \
    "Afore Coppel"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/AIG-Seguros.jpg" \
    "assets/clientes/aig-seguros.jpg" \
    "AIG Seguros"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/FinanzasAtlas-1.jpg" \
    "assets/clientes/finanzas-atlas.jpg" \
    "Finanzas Atlas"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/HDI-Seguros.jpg" \
    "assets/clientes/hdi-seguros.jpg" \
    "HDI Seguros"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/HIR-Seguros.jpg" \
    "assets/clientes/hir-seguros.jpg" \
    "HIR Seguros"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/Ivercap-1.jpg" \
    "assets/clientes/ivercap.jpg" \
    "Ivercap"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/Pensionisste.jpg" \
    "assets/clientes/pensionisste.jpg" \
    "Pensionisste"

download_file \
    "https://verifika.mx/wp-content/uploads/2020/05/PrincipalFinantialGroup-1.jpg" \
    "assets/clientes/principal.jpg" \
    "Principal Financial Group"

echo ""

# RESUMEN
echo "======================================"
echo "Resumen de Descarga"
echo "======================================"
echo "✓ Exitosas: $SUCCESS"
echo "✗ Errores: $ERRORS"
echo "Total: $((SUCCESS + ERRORS))"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo "¡Todas las imágenes se descargaron correctamente! ✓"
else
    echo "Algunas imágenes no se pudieron descargar. Revisa los errores arriba."
fi

echo ""
echo "======================================"
echo "Nota:"
echo "Los documentos PDF deben descargarse"
echo "manualmente desde el sitio original:"
echo "- Tipologías"
echo "- Evaluación Nacional"
echo "- Informe de Evaluación Mutua"
echo "======================================"
