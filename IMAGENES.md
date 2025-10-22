# Guía para Descargar Imágenes del Sitio Original

Este archivo contiene las URLs exactas de todas las imágenes necesarias del sitio original de Verifika.

## 📥 Logos

### Logo Principal (Color)
- **URL**: `https://verifika.mx/wp-content/uploads/elementor/thumbs/LogoVerifikaTransparente-pu1qz6g5lu1m0tlzg0nl904ss2s3e0zhlvwtsu7k74.png`
- **Guardar como**: `assets/logos/logo-verifika.png`

### Logo Footer (Blanco)
- **URL**: `https://verifika.mx/wp-content/uploads/elementor/thumbs/Logo-Verifika-White-Trans-pu1r0bt1yjmcazerlq9o04v2zst31vxwy9prblt88w.png`
- **Guardar como**: `assets/logos/logo-verifika-white.png`

## 📷 Sección Nosotros

### Imagen Nosotros
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/Verifika-Nosotros1.jpg`
- **Guardar como**: `assets/nosotros.jpg`

## 🏢 Clientes (Logos)

### ProAgro
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/ProAgro.jpg`
- **Guardar como**: `assets/clientes/proagro.jpg`

### Seguros Argos
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/Seguros-Argos.jpg`
- **Guardar como**: `assets/clientes/seguros-argos.jpg`

### SisNova
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/SisNova.jpg`
- **Guardar como**: `assets/clientes/sisnova.jpg`

### XXI Banorte
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/XXI-Banorte.jpg`
- **Guardar como**: `assets/clientes/xxi-banorte.jpg`

### Afore Coppel
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/AforeCoppel-1.jpg`
- **Guardar como**: `assets/clientes/afore-coppel.jpg`

### AIG Seguros
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/AIG-Seguros.jpg`
- **Guardar como**: `assets/clientes/aig-seguros.jpg`

### Finanzas Atlas
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/FinanzasAtlas-1.jpg`
- **Guardar como**: `assets/clientes/finanzas-atlas.jpg`

### HDI Seguros
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/HDI-Seguros.jpg`
- **Guardar como**: `assets/clientes/hdi-seguros.jpg`

### HIR Seguros
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/HIR-Seguros.jpg`
- **Guardar como**: `assets/clientes/hir-seguros.jpg`

### Ivercap
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/Ivercap-1.jpg`
- **Guardar como**: `assets/clientes/ivercap.jpg`

### Pensionisste
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/Pensionisste.jpg`
- **Guardar como**: `assets/clientes/pensionisste.jpg`

### Principal Financial Group
- **URL**: `https://verifika.mx/wp-content/uploads/2020/05/PrincipalFinantialGroup-1.jpg`
- **Guardar como**: `assets/clientes/principal.jpg`

## 🛠️ Métodos de Descarga

### Método 1: Descarga Manual
1. Abre cada URL en tu navegador
2. Clic derecho > "Guardar imagen como..."
3. Guarda en la carpeta indicada

### Método 2: Usando wget (Linux/Mac)
```bash
# Logos
wget -O assets/logos/logo-verifika.png "https://verifika.mx/wp-content/uploads/elementor/thumbs/LogoVerifikaTransparente-pu1qz6g5lu1m0tlzg0nl904ss2s3e0zhlvwtsu7k74.png"
wget -O assets/logos/logo-verifika-white.png "https://verifika.mx/wp-content/uploads/elementor/thumbs/Logo-Verifika-White-Trans-pu1r0bt1yjmcazerlq9o04v2zst31vxwy9prblt88w.png"

# Nosotros
wget -O assets/nosotros.jpg "https://verifika.mx/wp-content/uploads/2020/05/Verifika-Nosotros1.jpg"

# Clientes
wget -O assets/clientes/proagro.jpg "https://verifika.mx/wp-content/uploads/2020/05/ProAgro.jpg"
wget -O assets/clientes/seguros-argos.jpg "https://verifika.mx/wp-content/uploads/2020/05/Seguros-Argos.jpg"
wget -O assets/clientes/sisnova.jpg "https://verifika.mx/wp-content/uploads/2020/05/SisNova.jpg"
wget -O assets/clientes/xxi-banorte.jpg "https://verifika.mx/wp-content/uploads/2020/05/XXI-Banorte.jpg"
wget -O assets/clientes/afore-coppel.jpg "https://verifika.mx/wp-content/uploads/2020/05/AforeCoppel-1.jpg"
wget -O assets/clientes/aig-seguros.jpg "https://verifika.mx/wp-content/uploads/2020/05/AIG-Seguros.jpg"
wget -O assets/clientes/finanzas-atlas.jpg "https://verifika.mx/wp-content/uploads/2020/05/FinanzasAtlas-1.jpg"
wget -O assets/clientes/hdi-seguros.jpg "https://verifika.mx/wp-content/uploads/2020/05/HDI-Seguros.jpg"
wget -O assets/clientes/hir-seguros.jpg "https://verifika.mx/wp-content/uploads/2020/05/HIR-Seguros.jpg"
wget -O assets/clientes/ivercap.jpg "https://verifika.mx/wp-content/uploads/2020/05/Ivercap-1.jpg"
wget -O assets/clientes/pensionisste.jpg "https://verifika.mx/wp-content/uploads/2020/05/Pensionisste.jpg"
wget -O assets/clientes/principal.jpg "https://verifika.mx/wp-content/uploads/2020/05/PrincipalFinantialGroup-1.jpg"
```

### Método 3: Usando curl (Mac/Linux)
```bash
# Logos
curl -o assets/logos/logo-verifika.png "https://verifika.mx/wp-content/uploads/elementor/thumbs/LogoVerifikaTransparente-pu1qz6g5lu1m0tlzg0nl904ss2s3e0zhlvwtsu7k74.png"
curl -o assets/logos/logo-verifika-white.png "https://verifika.mx/wp-content/uploads/elementor/thumbs/Logo-Verifika-White-Trans-pu1r0bt1yjmcazerlq9o04v2zst31vxwy9prblt88w.png"

# Nosotros
curl -o assets/nosotros.jpg "https://verifika.mx/wp-content/uploads/2020/05/Verifika-Nosotros1.jpg"

# Clientes
curl -o assets/clientes/proagro.jpg "https://verifika.mx/wp-content/uploads/2020/05/ProAgro.jpg"
curl -o assets/clientes/seguros-argos.jpg "https://verifika.mx/wp-content/uploads/2020/05/Seguros-Argos.jpg"
curl -o assets/clientes/sisnova.jpg "https://verifika.mx/wp-content/uploads/2020/05/SisNova.jpg"
curl -o assets/clientes/xxi-banorte.jpg "https://verifika.mx/wp-content/uploads/2020/05/XXI-Banorte.jpg"
curl -o assets/clientes/afore-coppel.jpg "https://verifika.mx/wp-content/uploads/2020/05/AforeCoppel-1.jpg"
curl -o assets/clientes/aig-seguros.jpg "https://verifika.mx/wp-content/uploads/2020/05/AIG-Seguros.jpg"
curl -o assets/clientes/finanzas-atlas.jpg "https://verifika.mx/wp-content/uploads/2020/05/FinanzasAtlas-1.jpg"
curl -o assets/clientes/hdi-seguros.jpg "https://verifika.mx/wp-content/uploads/2020/05/HDI-Seguros.jpg"
curl -o assets/clientes/hir-seguros.jpg "https://verifika.mx/wp-content/uploads/2020/05/HIR-Seguros.jpg"
curl -o assets/clientes/ivercap.jpg "https://verifika.mx/wp-content/uploads/2020/05/Ivercap-1.jpg"
curl -o assets/clientes/pensionisste.jpg "https://verifika.mx/wp-content/uploads/2020/05/Pensionisste.jpg"
curl -o assets/clientes/principal.jpg "https://verifika.mx/wp-content/uploads/2020/05/PrincipalFinantialGroup-1.jpg"
```

## 📄 Documentos PDF

Los siguientes documentos PDF deben ser descargados del sitio original o creados como placeholders:

1. `assets/documentos/tipologias.pdf`
2. `assets/documentos/evaluacion-nacional.pdf`
3. `assets/documentos/informe-evaluacion-mutua.pdf`

**Nota**: Estos documentos están disponibles en el sitio original. Descárgalos desde:
- https://verifika.mx (sección de Noticias)

## ✅ Verificación

Después de descargar todas las imágenes, verifica que tienes:

```
assets/
├── logos/
│   ├── logo-verifika.png ✓
│   └── logo-verifika-white.png ✓
├── clientes/ (12 imágenes)
│   ├── proagro.jpg ✓
│   ├── seguros-argos.jpg ✓
│   ├── sisnova.jpg ✓
│   ├── xxi-banorte.jpg ✓
│   ├── afore-coppel.jpg ✓
│   ├── aig-seguros.jpg ✓
│   ├── finanzas-atlas.jpg ✓
│   ├── hdi-seguros.jpg ✓
│   ├── hir-seguros.jpg ✓
│   ├── ivercap.jpg ✓
│   ├── pensionisste.jpg ✓
│   └── principal.jpg ✓
├── documentos/ (3 PDFs)
│   ├── tipologias.pdf ✓
│   ├── evaluacion-nacional.pdf ✓
│   └── informe-evaluacion-mutua.pdf ✓
└── nosotros.jpg ✓
```

## 🎨 Optimización Opcional

Después de descargar las imágenes, puedes optimizarlas usando:

### TinyPNG / TinyJPG
- https://tinypng.com
- https://tinyjpg.com

### ImageOptim (Mac)
```bash
brew install imageoptim
```

### Optimización manual con ImageMagick
```bash
# Instalar ImageMagick
brew install imagemagick

# Optimizar una imagen
convert input.jpg -quality 85 -resize 1200x output.jpg
```

---

**Total de archivos**: 16 imágenes + 3 PDFs = 19 archivos
