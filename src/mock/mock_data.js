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
