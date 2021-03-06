define({ "api": [
  {
    "group": "Agen",
    "type": "get",
    "url": "/regular/agen/:id",
    "title": "Mendapatkan Detail Agen",
    "version": "0.0.0",
    "description": "<p>Untuk mendapatkan detail agen berdasarkan id</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/regular/agen/1933",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n     {\n         \"data\": {\n             \"id_agent\": 1933,\n             \"nama_agent\": \"PT.MAIZAN AGUNG\",\n             \"alamat_agent\": \"JL.KOMP.BUMI ORANGE F8 NO.36-BANDUNG\",\n             \"jam_operasional\": \"00:00:00\",\n             \"no_telepon\": \"021-809897\",\n             \"foto_1\": \"https://rumahdijual.com/attachments/jakarta-selatan/26693241d1533874029-jakarta-selatan-jalan-kapten-tendean-no-49-mampang-prapatan-img-20180809-wa0003.jpg\",\n             \"foto_2\": \"https://3.bp.blogspot.com/-dPoPzNvgDRA/XBDNqLhTfpI/AAAAAAAAa4Q/KZ_c0A-CVRQCIIg6nm9HnqCQSYEpVnbZwCLcBGAs/s1600/agen%2Blion%2Bparcel%2Bbatam.png\",\n             \"foto_3\": \"https://rumahdijual.com/attachments/jakarta-selatan/26693241d1533874029-jakarta-selatan-jalan-kapten-tendean-no-49-mampang-prapatan-img-20180809-wa0003.jpg\",\n             \"latitude\": \"-6.913879871\",\n             \"longitude\": \"107.6102982\",\n             \"status\": \"\",\n             \"_3lc\": null,\n             \"rate\": null\n         }\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "./routers/regular.js",
    "groupTitle": "Agen",
    "name": "GetRegularAgenId"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C__Users_dev_Desktop_taufiq_backend_lionparcel_api_apidoc_main_js",
    "groupTitle": "C__Users_dev_Desktop_taufiq_backend_lionparcel_api_apidoc_main_js",
    "name": ""
  },
  {
    "group": "General",
    "type": "get",
    "url": "/regular",
    "title": "Tes Koneksi",
    "version": "0.0.0",
    "description": "<p>Untuk melakukan cek koneksi ke server.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"connection\": \"connected\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routers/regular.js",
    "groupTitle": "General",
    "name": "GetRegular"
  },
  {
    "group": "Wilayah",
    "type": "get",
    "url": "/regular/wilayah?keyword=pabuaran",
    "title": "Mencari Wilayah",
    "version": "0.0.0",
    "description": "<p>Untuk mencari data dari tabel wilayah berdasarkan param keyword.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>isikan nilai keyword dengan nama(kelurahan, kecamatan, kabupaten/kota, provinsi)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\": \"TNG\",\n         \"name\": \"KEL. PABUARAN, KEC. JAYANTI, KAB TANGERANG, PROV. BANTEN\"\n     },\n     {\n         \"id\": \"TNG\",\n         \"name\": \"KEL. PABUARAN TUMPENG, KEC. KARAWACI, KAB TANGERANG, PROV. BANTEN\"\n     },\n     ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./routers/regular.js",
    "groupTitle": "Wilayah",
    "name": "GetRegularWilayahKeywordPabuaran"
  }
] });
