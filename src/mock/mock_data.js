export const mockData = {
  "categories": [
    {
      "id": "common",
      "name": "常用系统",
      "icon": "⭐",
      "order": 0,
      "sites": [
        {
          "id": "www",
          "name": "官网",
          "url": "https://www.skyrisai.com",
          "description": "官网",
          "icon": "🌐"
        },
        {
          "id": "recruit",
          "name": "招聘系统",
          "url": "https://resume.skyrisai.com:34652/",
          "description": "内部招聘管理",
          "icon": "📋"
        },
        {
          "id": "标注系统",
          "name": "标注系统",
          "url": "http://web.skyrisai.com:30000/",
          "description": "算法标注管理",
          "icon": "📋"
        },
        {
          "id": "site-1784279256005",
          "name": "SSO系统",
          "url": "https://sso.skyrisai.com/login/skyris",
          "description": "单点登录系统",
          "icon": "https://framerusercontent.com/images/YVLNtOnoSnSoWE03O8mEd6q8.png?scale-down-to=512&width=1181&height=196"
        }
      ]
    },
    {
      "id": "dev",
      "name": "研发工具",
      "icon": "💻",
      "order": 1,
      "sites": [
        {
          "id": "git",
          "name": "Git仓库",
          "url": "https://git.skyrisai.com",
          "description": "代码托管平台",
          "icon": "https://cdn.cookielaw.org/logos/aa14a5c8-79e3-442a-8177-464ad850b19d/e46c1d0d-1f66-481f-bc06-5427671431da/253e6fee-c4c0-4b60-bc35-79cdae5dda32/gitlab-logo-100.png"
        },
        {
          "id": "harbor",
          "name": "Harbor",
          "url": "https://harbor.skyrisai.com",
          "description": "容器镜像仓库",
          "icon": "https://goharbor.io/favicon.svg"
        },
        {
          "id": "site-1773385457319",
          "name": "禅道",
          "url": "https://zentao.skyrisai.com:8080/zentao",
          "description": "项目管理",
          "icon": " https://zentao.skyrisai.com:8080/zentao/favicon.ico"
        },
        {
          "id": "site-1777429867042",
          "name": "obsidian",
          "url": "http://obsidian-kbsite-88c401.pages.skyrisai.com",
          "description": "obsidian知识库",
          "icon": "https://obsidian.md/images/obsidian-logo-gradient.svg"
        },
        {
          "id": "site-1778472124112",
          "name": "内网禅道",
          "url": "http://zentaoint.skyrisai.com:28080/zentao/my.html",
          "description": "",
          "icon": " https://zentao.skyrisai.com:8080/zentao/favicon.ico"
        },
        {
          "id": "site-1779853295401",
          "name": "drawAI",
          "url": "http://draw.skyrisai.com",
          "description": "ai画图工具",
          "icon": ""
        },
        {
          "id": "site-1780293828024",
          "name": "GitReviewManager",
          "url": "http://review.skyrisai.com",
          "description": "gitlab代码审阅管理平台",
          "icon": ""
        },
        {
          "id": "site-1782797562316",
          "name": "agetnrq",
          "url": "https://agetnrq.skyrisai.com/",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1782797592964",
          "name": "gptimage",
          "url": "https://gptimage.skyrisai.com/",
          "description": "",
          "icon": ""
        }
      ]
    },
    {
      "id": "infra",
      "name": "基础设施",
      "icon": "🏗️",
      "order": 2,
      "sites": [
        {
          "id": "pve1",
          "name": "PVE1",
          "url": "https://pve1.skyrisai.com",
          "description": "Proxmox虚拟化节点1",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABIFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1NTWysrLh4eHAwMBeXl4CAgLGxsb///+VlZUUFBTZ2dmHh4cEAgBpMwCsVADAXgCRRwApFAAfHx/l5eVzc3NrNADlcADfbQBWKgAsLCzv7+/+/v5fX18rKysDAQCdTQDjbwBKJAA8PDz29vb7+/s5OTkHBACtVQA5HABOTk78/PxISEgNBwC8XADYagArFQBiYmJWVlYWCwDHYgDPZQAfDwB3d3dlZWUgEADRZgDFYAAUCgCFhYVycnItFgDZagC4WgAMBgCDg4N5eXk8HQDgbQCpUwAFAwCqUwC5WgDGYQAVCgA9HgDkcABPJwBsNQDhbgBcLQBvNgC0WACaSwAxGABaD2HEAAAACnRSTlMAF0x6gCXB/132sRgSBQAAAYVJREFUeAF0TYURwzAMNCRVGcPMTPtPVysuw5ueTiYzKOPKBzij5A51AT+xUGW+XMEfrJaYq5j/a+AMOX+92e72d3+/227W8hdC6EwOx5PAWeZn5MfDzClh0rxo6OpIdWTaRfqMcDBMy3Zcz0c/AAjw9T3XsS3TAE4UCCOBOEkzEeRFkYsnK5MY3RAUUahq5E3b9SIaBnH1Y9ugV1dzAaYrW1RtBDEQxMKNr5M3MzOz+y/lR2Y6hiVJ3BKDF0S2NFHiF3/uR6sByQruqqavBoam4q7ItBuQaeHFdlz8e46Nm2XSaUB+gLcwihlLohDnwKerAaUZXvOirIocpyyluwHVDd7brmuxNzV9G/Rd138brCmGoiqL4SvFWuQ4JYzF0/gucoUZOB5guk7whLkSlaXGSpS+5luJOqluZmmnWpibK9WrWP+FR+gjIksnIhwpsiJB7KhodeToVo6OAolGsrOAEkxMrG1cPHqCiY+zjY0BJhiCSY5goiWU7AlmHIJZj3DmJZj9ATGDVYd8dD0PAAAAAElFTkSuQmCC"
        },
        {
          "id": "pve2",
          "name": "PVE2",
          "url": "https://pve2.skyrisai.com",
          "description": "Proxmox虚拟化节点2",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABIFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1NTWysrLh4eHAwMBeXl4CAgLGxsb///+VlZUUFBTZ2dmHh4cEAgBpMwCsVADAXgCRRwApFAAfHx/l5eVzc3NrNADlcADfbQBWKgAsLCzv7+/+/v5fX18rKysDAQCdTQDjbwBKJAA8PDz29vb7+/s5OTkHBACtVQA5HABOTk78/PxISEgNBwC8XADYagArFQBiYmJWVlYWCwDHYgDPZQAfDwB3d3dlZWUgEADRZgDFYAAUCgCFhYVycnItFgDZagC4WgAMBgCDg4N5eXk8HQDgbQCpUwAFAwCqUwC5WgDGYQAVCgA9HgDkcABPJwBsNQDhbgBcLQBvNgC0WACaSwAxGABaD2HEAAAACnRSTlMAF0x6gCXB/132sRgSBQAAAYVJREFUeAF0TYURwzAMNCRVGcPMTPtPVysuw5ueTiYzKOPKBzij5A51AT+xUGW+XMEfrJaYq5j/a+AMOX+92e72d3+/227W8hdC6EwOx5PAWeZn5MfDzClh0rxo6OpIdWTaRfqMcDBMy3Zcz0c/AAjw9T3XsS3TAE4UCCOBOEkzEeRFkYsnK5MY3RAUUahq5E3b9SIaBnH1Y9ugV1dzAaYrW1RtBDEQxMKNr5M3MzOz+y/lR2Y6hiVJ3BKDF0S2NFHiF3/uR6sByQruqqavBoam4q7ItBuQaeHFdlz8e46Nm2XSaUB+gLcwihlLohDnwKerAaUZXvOirIocpyyluwHVDd7brmuxNzV9G/Rd138brCmGoiqL4SvFWuQ4JYzF0/gucoUZOB5guk7whLkSlaXGSpS+5luJOqluZmmnWpibK9WrWP+FR+gjIksnIhwpsiJB7KhodeToVo6OAolGsrOAEkxMrG1cPHqCiY+zjY0BJhiCSY5goiWU7AlmHIJZj3DmJZj9ATGDVYd8dD0PAAAAAElFTkSuQmCC"
        },
        {
          "id": "pve3",
          "name": "PVE3",
          "url": "https://pve3.skyrisai.com",
          "description": "Proxmox虚拟化节点3",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABIFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1NTWysrLh4eHAwMBeXl4CAgLGxsb///+VlZUUFBTZ2dmHh4cEAgBpMwCsVADAXgCRRwApFAAfHx/l5eVzc3NrNADlcADfbQBWKgAsLCzv7+/+/v5fX18rKysDAQCdTQDjbwBKJAA8PDz29vb7+/s5OTkHBACtVQA5HABOTk78/PxISEgNBwC8XADYagArFQBiYmJWVlYWCwDHYgDPZQAfDwB3d3dlZWUgEADRZgDFYAAUCgCFhYVycnItFgDZagC4WgAMBgCDg4N5eXk8HQDgbQCpUwAFAwCqUwC5WgDGYQAVCgA9HgDkcABPJwBsNQDhbgBcLQBvNgC0WACaSwAxGABaD2HEAAAACnRSTlMAF0x6gCXB/132sRgSBQAAAYVJREFUeAF0TYURwzAMNCRVGcPMTPtPVysuw5ueTiYzKOPKBzij5A51AT+xUGW+XMEfrJaYq5j/a+AMOX+92e72d3+/227W8hdC6EwOx5PAWeZn5MfDzClh0rxo6OpIdWTaRfqMcDBMy3Zcz0c/AAjw9T3XsS3TAE4UCCOBOEkzEeRFkYsnK5MY3RAUUahq5E3b9SIaBnH1Y9ugV1dzAaYrW1RtBDEQxMKNr5M3MzOz+y/lR2Y6hiVJ3BKDF0S2NFHiF3/uR6sByQruqqavBoam4q7ItBuQaeHFdlz8e46Nm2XSaUB+gLcwihlLohDnwKerAaUZXvOirIocpyyluwHVDd7brmuxNzV9G/Rd138brCmGoiqL4SvFWuQ4JYzF0/gucoUZOB5guk7whLkSlaXGSpS+5luJOqluZmmnWpibK9WrWP+FR+gjIksnIhwpsiJB7KhodeToVo6OAolGsrOAEkxMrG1cPHqCiY+zjY0BJhiCSY5goiWU7AlmHIJZj3DmJZj9ATGDVYd8dD0PAAAAAElFTkSuQmCC"
        },
        {
          "id": "minio1",
          "name": "MinIO1",
          "url": "https://minio1.skyrisai.com",
          "description": "7对象存储节点1",
          "icon": "https://min-io.cn/resources/img/logo.svg"
        },
        {
          "id": "minio2",
          "name": "MinIO2",
          "url": "https://minio2.skyrisai.com",
          "description": "5对象存储节点2",
          "icon": "https://min-io.cn/resources/img/logo.svg"
        },
        {
          "id": "fnos",
          "name": "FNOS",
          "url": "https://web.skyrisai.com:5667",
          "description": "NAS网络存储",
          "icon": "https://www.fnnas.com/favicon.ico"
        },
        {
          "id": "site-1774853270731",
          "name": "路由系统",
          "url": "https://router.skyrisai.com",
          "description": "路由器",
          "icon": " https://downloads.immortalwrt.org/favicon.ico"
        },
        {
          "id": "site-1780371147069",
          "name": "Portainer",
          "url": "https://docker.skyrisai.com",
          "description": "docker管理面板",
          "icon": ""
        },
        {
          "id": "site-1780372800143",
          "name": "sub2api",
          "url": "https://sub2api.skyrisai.com",
          "description": "统一api管理",
          "icon": ""
        },
        {
          "id": "site-1780891195573",
          "name": "内网sub2api用量仪表盘",
          "url": "http://sub2api-dash.skyrisai.com/",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1781262232357",
          "name": "hookhub",
          "url": "https://webhook-xnldrpuk-1.skyrisai.com/admin",
          "description": "hook管理",
          "icon": ""
        },
        {
          "id": "site-1781779691077",
          "name": "alist网盘",
          "url": "https://alist.skyrisai.com/",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1783409342552",
          "name": "vpn-dashboard",
          "url": "https://vpn-hp.skyrisai.com/",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1784093853127",
          "name": "grafana",
          "url": "https://grafana.skyrisai.com",
          "description": "告警仪表盘",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHUlEQVR4AX3MM6BtVxRA0bHOuc+xXcW2bdtV2MW2bdu2bdu2bTxe7BWj+sUo5wwAAPh58zkAFsJ5OBenwYRXvA4AYhzxZDgDG+FD7IYXMD2+wPsQvwdQYQUsiRbGsCHmQxdgDN9jUpyBXf4/6MNtWB4ALTyN+/EJ+rEIVsNL2Ag//jVIIZyPLQHDOBKn4SfQ4XeVbgvjKNyj6Yi/Bt1IawtXCX2Kc4zZXp+mbtNIy0iTCm9FwxP5ixk0HPK7/QJ+2X5OWFS6Bx3FqmpP/25uxRk6pkUIk6jco7aLMYuptePX/ecQPVmXwWoP6Qg8r1gxBnIwR+NCHR1th6CltsnvDhRuUeyrmDwGj5mrzrHcWXEAxseDWE2YQLpcsYvwmnbS0dATZwmbCCtF7akYPH7OpRXXYgrAG6pcIZvxazScp8qTZTylTtoBO+BkbIarYvCkOWZSO0lYGQ00VbbVdom0stpav3tSejV/Kq/GhNVJ0o7CmdETO8XQWXMiJ1HFampbCivgnaht0xkeezRK99QRMXm288NqwpgzO67CDPgEawaM3DSXHCwws9oNmEP4LCoXqzwgDCoW0rF9ppmkK3VcliUeCYCRW+eEbsWNWB0ATbTQh5Au1c6dhR/6NnhdAIzePTt0q9yAVaWXpU+F6YTpMQW+lFbEG6bq1jv3S/8bPDQbTfRYCZNJj4ryjRIDqlhYlcfhZe3YSqXZu8yb4Dc5M9T5Lt4jkAAAAABJRU5ErkJggg=="
        },
        {
          "id": "site-1784094238980",
          "name": "alertmanager",
          "url": "https://alertmanager.skyrisai.com",
          "description": "告警通知服务",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACT0lEQVQ4jX3TTWhcBRQF4O++N5nJm0ksSSz1ryKiRUgacNGqKIoWxIo7lUoFQXChiy4aLCgiggur4kJRgqAgYv1ZacFdQRcWxIKKFQoq1eIPFoRWjWnSmcx710XHEkG8qwP3nnPvgXPDf9Sfu2f/gdvwOl7DK7DhnWP/mo3/IV+IRdyLE3gUX2IzfsX3ECNCgR24CWvo4x5ci7GRYB+nMDMSXoDWqNnBY7ht3TFrOIKP8BO6uA47MY8p/H5OIJ0VflxHXsH+ke8/QI3aorbteBaPGHimNdqf0kHhPqHSOKDveZWBtkukW6QZ4Zto+TSXPKzlaV1bApb2zMH10iHUGncoHVGa11hUuxQhTCscUlrQd4PSsPXXk7Oi05TNcnGrNIkvNL6NXrbybOxTO27oAawp7VJ6SthvzBMaG1sxWZTZz71ReXzkfwmrIqaiskljQfjBMKm9qBPXCLuEl6P0WaHMG2PcvuiajC7RtSkmcsqYleg6FRfkREwQM8R0DKPn6+iaiMoV2hTKPGk8P1flUJVUeZXK7dHLM9r5ho779XK3jq25VtPNK1VJN2+OKe048+occloRO5UeFHbguyg9VK/0D0fTvjgiNuYwTxQbYi5r7+HyUTbuClg9uFUuN7BF6X3MCr9E4U2Fj4VljW1qezJdLb2rdiCb+OT8L6x+OAdtjQ9w57pQDUaprBDSW4a5Vzhd3X3sfJRFuzkHColaOir9LFwmbEYPJ6XncNpFbet/gU4yMND2Et6WDovmN030FLFdkS/gqGEcVzA+/xX4G+Rnx8fDF+tXAAAAAElFTkSuQmCC"
        },
        {
          "id": "site-1784093914556",
          "name": "prometheus",
          "url": "https://prometheus.skyrisai.com",
          "description": "监控时序数据库",
          "icon": "https://prometheus.io/_next/static/media/prometheus-logo.7aa022e5.svg"
        }
      ]
    },
    {
      "id": "category-1774850620561",
      "icon": "🌐",
      "name": "VPN中的服务",
      "order": 0,
      "sites": [
        {
          "id": "site-1783408572305",
          "name": "harbor",
          "url": "https://harbor.skyrisai.com",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1783408590016",
          "name": "sub2api",
          "url": "https://sub2api.skyrisai.com",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1783408604280",
          "name": "sub2api-dash",
          "url": "https://sub2api-dash.skyrisai.com",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1783408620232",
          "name": "hookhub",
          "url": "https://webhook-xnldrpuk-1.skyrisai.com",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1783408630641",
          "name": "alist",
          "url": "https://alist.skyrisai.com",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1783408649984",
          "name": "router",
          "url": "https://router.skyrisai.com",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1783408666670",
          "name": "pve",
          "url": "https://pve1.skyrisai.com",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1783408678991",
          "name": "gptimage",
          "url": "https://gptimage.skyrisai.com",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1783408693771",
          "name": "drawAI",
          "url": "https://draw.skyrisai.com",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1783409397701",
          "name": "vpn-hp",
          "url": "https://vpn-hp.skyrisai.com/",
          "description": "",
          "icon": ""
        },
        {
          "id": "site-1783509377692",
          "name": "gitlab",
          "url": "https://git.skyrisai.com",
          "description": "",
          "icon": ""
        }
      ]
    }
  ],
  "title": "Skyris 内部导航",
  "search": "bing"
}
