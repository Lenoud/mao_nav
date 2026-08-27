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
          "icon": "https://framerusercontent.com/images/fQnT9Tfdi8bY8vraFID2jGEyB1U.png"
        },
        {
          "id": "recruit",
          "name": "HR招聘系统",
          "url": "https://resume.skyrisai.com:34651",
          "description": "内部招聘管理",
          "icon": "https://resume.skyrisai.com:34651/skyris-hr-logo.png"
        },
        {
          "id": "site-1784279256005",
          "name": "SSO系统",
          "url": "https://sso.skyrisai.com/login/skyris",
          "description": "单点登录系统",
          "icon": "https://sso.skyrisai.com/files/uploads/branding/skyris-casdoor-logo.png"
        },
        {
          "id": "site-1773385457319",
          "name": "禅道",
          "url": "https://zentaoint.skyrisai.com:28080",
          "description": "项目管理",
          "icon": "data:image/png;base64,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"
        }
      ]
    },
    {
      "id": "category-1787823892318",
      "icon": "☁️",
      "name": "AI 平台服务",
      "order": 1,
      "sites": [
        {
          "id": "site-1780891195573",
          "name": "AI用量Dashboard",
          "url": "https://sub2api-dash.skyrisai.com",
          "description": "AI 用量仪表盘",
          "icon": "https://api.iconify.design/mdi/chart-line.svg?color=%23F59E0B"
        },
        {
          "id": "site-1780372800143",
          "name": "Sub2API",
          "url": "https://sub2api.skyrisai.com",
          "description": "统一api管理",
          "icon": "https://github.com/Wei-Shaw/sub2api/raw/main/assets/logo.svg"
        },
        {
          "id": "site-1780293828024",
          "name": "AI Git Review",
          "url": "http://review.skyrisai.com",
          "description": "gitlab代码审阅管理平台",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEX///+OmqNxgItzg42utrxWangAM0sAHDsAID2MmKEkRlkAHTv19/jQ1dno6+0AFzgAEjVdcX7a3uGVoal/jZfFy887VWbV2t0ANkwPPFJFXWxOZXSgq7KEkZs0UGFpeoXo8stUAAAAdUlEQVR4Ac2QQwLEABRDU9v2/U85RpVuyrf9CHBJBFH6IsrjoaJqH3TVmAxNfLEWhvbmQ9tx6VDwPD8gQ8cKwkgkQ0F3uWas23y4eJlYkisLZAjJ87yUDREmGdiQF58XX1QDRlqWpYgvcaV8qWo0bZq2Ha7IHYsfB3MzPFfmAAAAAElFTkSuQmCC"
        },
        {
          "id": "site-1782797592964",
          "name": "GPT 图片生成",
          "url": "https://gptimage.skyrisai.com",
          "description": "GPT专用图片生成工具",
          "icon": "https://gptimage.skyrisai.com/pwa-icon.svg"
        },
        {
          "id": "site-1779853295401",
          "name": "DrawAI",
          "url": "https://draw.skyrisai.com",
          "description": "ai画图工具",
          "icon": "https://draw.skyrisai.com/favicon.ico"
        }
      ]
    },
    {
      "id": "category-1787823924312",
      "icon": "🛠️",
      "name": "代码构建发布服务",
      "order": 2,
      "sites": [
        {
          "id": "harbor",
          "name": "Harbor",
          "url": "https://harbor.skyrisai.com",
          "description": "容器镜像仓库",
          "icon": "https://goharbor.io/favicon.svg"
        },
        {
          "id": "site-1786589002723",
          "name": "argocd",
          "url": "https://argocd.skyrisai.com/",
          "description": "cicd 平台",
          "icon": "https://argocd.skyrisai.com/assets/images/logo.png"
        },
        {
          "id": "site-1787824131200",
          "name": "Jenkins",
          "url": "https://jenkins.skyrisai.com/",
          "description": "Jenkins 代码构建平台",
          "icon": "https://www.jenkins.io/images/logos/jenkins/jenkins.svg"
        },
        {
          "id": "git",
          "name": "GitLab",
          "url": "https://git.skyrisai.com",
          "description": "代码托管平台",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEUAAADiQyriQyjfQCjiQyjiQij/gADiQin4Uw3jQSneQCbkRyriQyjqUCb7bCbuVifzXibyWyjyXCbzWif5mSb2dSfvUCD1YSb8oib2hCbuZiL0hybxfCbweSfwcSPweSjmCvDDAAAAIHRSTlMAMf4giXACyQtJFRW0cP7/tyySR/z/ENb//w/WjkcSaXdrqYkAAADmSURBVHgBfdAFDsNAEANAxw0zluH/v+wql4NsYQRHjlcKVlGEHX0XkQcoB9InYjKBkpAxNinJDEpGModRUJTYqSgKGDVFoieIOgjrGRkFKxe2B6vkKgnCTPQEWxvRqBGoaUTmJxix5+/stJ8qNPyrQdu2HX/o5FECYUQ924BNqHcbMKjYextQJV1roVcJ9d5jaD1dLwZgbL3Ofm6NEH2Y2L/3EGGHMmIztc48L601wTmezNVyFhezP+Vw7JjLeTWbemWQ+vNmXsJ663o7O7crvrlvFfMdPzzWxPzAT8+b1D/xz+uFvTeXVhe3WIiAaQAAAABJRU5ErkJggg=="
        }
      ]
    },
    {
      "id": "infra",
      "name": "基础设施服务",
      "icon": "🏗️",
      "order": 4,
      "sites": [
        {
          "id": "site-1774853270731",
          "name": "路由系统",
          "url": "https://router.skyrisai.com",
          "description": "路由器",
          "icon": "https://downloads.immortalwrt.org/favicon.ico"
        },
        {
          "id": "site-1781262232357",
          "name": "HookHub",
          "url": "https://webhook-xnldrpuk-1.skyrisai.com/admin",
          "description": "hook管理",
          "icon": "https://api.iconify.design/mdi/webhook.svg?color=%23E11D48"
        },
        {
          "id": "site-1783409342552",
          "name": "VPN Dashboard",
          "url": "https://vpn-hp.skyrisai.com",
          "description": "VPN 服务状态面板",
          "icon": "https://api.iconify.design/mdi/vpn.svg?color=%2314B8A6"
        },
        {
          "id": "site-1785916524267",
          "name": "supabase",
          "url": "https://supabase.skyrisai.com",
          "description": "supabase开发服务",
          "icon": "https://supabase.skyrisai.com/img/supabase-logo.svg"
        },
        {
          "id": "site-1777429867042",
          "name": "Obsidian",
          "url": "http://obsidian-kbsite-88c401.pages.skyrisai.com",
          "description": "obsidian知识库",
          "icon": "https://obsidian.md/images/obsidian-logo-gradient.svg"
        }
      ]
    },
    {
      "id": "category-1787823904941",
      "icon": "📁",
      "name": "存储服务",
      "order": 5,
      "sites": [
        {
          "id": "minio1",
          "name": "MinIO 1",
          "url": "https://minio1.skyrisai.com",
          "description": "华为服务器对象存储节点",
          "icon": "https://min-io.cn/resources/img/logo.svg"
        },
        {
          "id": "minio2",
          "name": "MinIO 2",
          "url": "https://minio2.skyrisai.com",
          "description": "NAS 对象存储节点",
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
          "id": "site-1781779691077",
          "name": "AList",
          "url": "https://alist.skyrisai.com/",
          "description": "网盘文件管理",
          "icon": "https://cdn.jsdelivr.net/gh/alist-org/logo@main/logo.svg"
        }
      ]
    },
    {
      "id": "category-1787823981646",
      "icon": "💻",
      "name": "Server 服务",
      "order": 6,
      "sites": [
        {
          "id": "site-1786501667491",
          "name": "JumpServer",
          "url": "https://jumpserver.skyrisai.com/",
          "description": "堡垒机服务",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEVHcEwHFBUPqZgMsKMOr58OmIoLqpsUs6APqpkQq5gVs5karZMSsqISspgVsZcTt5kVs5gQoooVemwXsZcVtZoXgXcVuJkWt5EUsZoXtZcZinMVtJcIKikXeW4Ro4kWy7Q9YC/bAAAAIHRSTlMACTlRRRMwCCYcppJb1v//yXcshLge8v9r4lLsHDuql+1xsgYAAAGJSURBVHgBdZLrloMgDIQjBORmQLECYnff/y03rfacvXTzM18mzOQAP2uA/2oQUqJ6jzTqEYzEN2qD2qLzFnQQv7AS2go/UUyz4u3Ld4RBypyIKMa4hkEJvF1oNHq5iZW4Nudi2RwqI8TpTEhcYKhTJGoW9rWUngUbe0KNPmUD1ve45QWOzGOt2uVci1MsUxhAphhbVWBcp3TlFerRLU7AOHc2dOexDwnjE+IBQ27sMx8HT1H8ZNWgTqmt/g7HyuLWCs9snwfsTl5Rcm8BILRYCsPVwM2X7QVrJ0qnOPY6wM4L2v2ERnniiHkEzPWAxW2cNFyGhLG4Mk77841WCnmz6BOqOQUlJyr9Y/aJURLjPM0vQ9S9tnnjs7KlqSp0RBdUYiLi1uI4ZM/G5EZxMidELXmSHKo9Z7Q1EUV3t/o6vDGPDl/dmuAYpTBYKU6pRa20bxzHrYxavg1CaniVQKPk2onR5vTvX6YQlapT74nTY7Dws6zE0YYwAgb97t8+uiacG/9ilEGqb40vfwgZPJVDfkAAAAAASUVORK5CYII="
        },
        {
          "id": "site-1786589100807",
          "name": "Kubernetes",
          "url": "https://k8sheadlamp.skyrisai.com/",
          "description": "k8s 仪表盘",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAVFBMVEVHcEz///////////////////////////////////////8ybeb+//8bY+Uua+YmZ+X1+P7Q3PlGeugGW+SKp/Do7vzA0PdeieuuwvTd5vtxlu2btPKZXBOhAAAAC3RSTlMAoQpjPtjvhSXEt67vDPIAAAGRSURBVCiRbZKJcqQwDESB4RjGkuX7gP//z7QYNptJpau49GypZTQMP/Tctufwt+YXeU/jX3jeqQXmWuj1G88LNcMW4lBof34gdwIZGwJuF55vNO1vZAyXJngAN3q94ZhFFCHYEt9vJm8XXE4xoulM9aVa7MXF5341RwiUyraRyp3Mxym2rpO6IWsludSp1OyrJ48PMZbU8tbZGAlENcbsY0xEAam5PwB3dSgIuRpdj4fDMriSNgKux7XOB0eFXKEcctFcx6J+0LhhSjFkwq5uY6MIx4Gm4ZHVu6XDHJ1Q2leUwE4jeR5G5BAO1LWPU9txmQyj07INSxI5XSfXknrJNTVHPiOa9mHFidUamxM+qHQKyNJiDZbTMmwu4BCscT56MhWgO6P/Ljg0uvSr/EGezhgLKmhvaG68zrZEpdVRbw3Fq7JYlvevplP3Rt9KzqV1Xcrnde7QQxNJypGhCKNa5HtSRpiSdJVCPMnbzD/tma1cDFQs32Nwj9Fa+IfK/jGaT8r+W339nNtp2v7rcRsdvgDXqyNs6sUXHAAAAABJRU5ErkJggg=="
        },
        {
          "id": "pve1",
          "name": "PVE 1",
          "url": "https://pve1.skyrisai.com",
          "description": "Proxmox虚拟化节点1",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABIFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1NTWysrLh4eHAwMBeXl4CAgLGxsb///+VlZUUFBTZ2dmHh4cEAgBpMwCsVADAXgCRRwApFAAfHx/l5eVzc3NrNADlcADfbQBWKgAsLCzv7+/+/v5fX18rKysDAQCdTQDjbwBKJAA8PDz29vb7+/s5OTkHBACtVQA5HABOTk78/PxISEgNBwC8XADYagArFQBiYmJWVlYWCwDHYgDPZQAfDwB3d3dlZWUgEADRZgDFYAAUCgCFhYVycnItFgDZagC4WgAMBgCDg4N5eXk8HQDgbQCpUwAFAwCqUwC5WgDGYQAVCgA9HgDkcABPJwBsNQDhbgBcLQBvNgC0WACaSwAxGABaD2HEAAAACnRSTlMAF0x6gCXB/132sRgSBQAAAYVJREFUeAF0TYURwzAMNCRVGcPMTPtPVysuw5ueTiYzKOPKBzij5A51AT+xUGW+XMEfrJaYq5j/a+AMOX+92e72d3+/227W8hdC6EwOx5PAWeZn5MfDzClh0rxo6OpIdWTaRfqMcDBMy3Zcz0c/AAjw9T3XsS3TAE4UCCOBOEkzEeRFkYsnK5MY3RAUUahq5E3b9SIaBnH1Y9ugV1dzAaYrW1RtBDEQxMKNr5M3MzOz+y/lR2Y6hiVJ3BKDF0S2NFHiF3/uR6sByQruqqavBoam4q7ItBuQaeHFdlz8e46Nm2XSaUB+gLcwihlLohDnwKerAaUZXvOirIocpyyluwHVDd7brmuxNzV9G/Rd138brCmGoiqL4SvFWuQ4JYzF0/gucoUZOB5guk7whLkSlaXGSpS+5luJOqluZmmnWpibK9WrWP+FR+gjIksnIhwpsiJB7KhodeToVo6OAolGsrOAEkxMrG1cPHqCiY+zjY0BJhiCSY5goiWU7AlmHIJZj3DmJZj9ATGDVYd8dD0PAAAAAElFTkSuQmCC"
        },
        {
          "id": "pve2",
          "name": "PVE 2",
          "url": "https://pve2.skyrisai.com",
          "description": "Proxmox虚拟化节点2",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABIFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1NTWysrLh4eHAwMBeXl4CAgLGxsb///+VlZUUFBTZ2dmHh4cEAgBpMwCsVADAXgCRRwApFAAfHx/l5eVzc3NrNADlcADfbQBWKgAsLCzv7+/+/v5fX18rKysDAQCdTQDjbwBKJAA8PDz29vb7+/s5OTkHBACtVQA5HABOTk78/PxISEgNBwC8XADYagArFQBiYmJWVlYWCwDHYgDPZQAfDwB3d3dlZWUgEADRZgDFYAAUCgCFhYVycnItFgDZagC4WgAMBgCDg4N5eXk8HQDgbQCpUwAFAwCqUwC5WgDGYQAVCgA9HgDkcABPJwBsNQDhbgBcLQBvNgC0WACaSwAxGABaD2HEAAAACnRSTlMAF0x6gCXB/132sRgSBQAAAYVJREFUeAF0TYURwzAMNCRVGcPMTPtPVysuw5ueTiYzKOPKBzij5A51AT+xUGW+XMEfrJaYq5j/a+AMOX+92e72d3+/227W8hdC6EwOx5PAWeZn5MfDzClh0rxo6OpIdWTaRfqMcDBMy3Zcz0c/AAjw9T3XsS3TAE4UCCOBOEkzEeRFkYsnK5MY3RAUUahq5E3b9SIaBnH1Y9ugV1dzAaYrW1RtBDEQxMKNr5M3MzOz+y/lR2Y6hiVJ3BKDF0S2NFHiF3/uR6sByQruqqavBoam4q7ItBuQaeHFdlz8e46Nm2XSaUB+gLcwihlLohDnwKerAaUZXvOirIocpyyluwHVDd7brmuxNzV9G/Rd138brCmGoiqL4SvFWuQ4JYzF0/gucoUZOB5guk7whLkSlaXGSpS+5luJOqluZmmnWpibK9WrWP+FR+gjIksnIhwpsiJB7KhodeToVo6OAolGsrOAEkxMrG1cPHqCiY+zjY0BJhiCSY5goiWU7AlmHIJZj3DmJZj9ATGDVYd8dD0PAAAAAElFTkSuQmCC"
        },
        {
          "id": "pve3",
          "name": "PVE 3",
          "url": "https://pve3.skyrisai.com",
          "description": "Proxmox虚拟化节点3",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABIFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1NTWysrLh4eHAwMBeXl4CAgLGxsb///+VlZUUFBTZ2dmHh4cEAgBpMwCsVADAXgCRRwApFAAfHx/l5eVzc3NrNADlcADfbQBWKgAsLCzv7+/+/v5fX18rKysDAQCdTQDjbwBKJAA8PDz29vb7+/s5OTkHBACtVQA5HABOTk78/PxISEgNBwC8XADYagArFQBiYmJWVlYWCwDHYgDPZQAfDwB3d3dlZWUgEADRZgDFYAAUCgCFhYVycnItFgDZagC4WgAMBgCDg4N5eXk8HQDgbQCpUwAFAwCqUwC5WgDGYQAVCgA9HgDkcABPJwBsNQDhbgBcLQBvNgC0WACaSwAxGABaD2HEAAAACnRSTlMAF0x6gCXB/132sRgSBQAAAYVJREFUeAF0TYURwzAMNCRVGcPMTPtPVysuw5ueTiYzKOPKBzij5A51AT+xUGW+XMEfrJaYq5j/a+AMOX+92e72d3+/227W8hdC6EwOx5PAWeZn5MfDzClh0rxo6OpIdWTaRfqMcDBMy3Zcz0c/AAjw9T3XsS3TAE4UCCOBOEkzEeRFkYsnK5MY3RAUUahq5E3b9SIaBnH1Y9ugV1dzAaYrW1RtBDEQxMKNr5M3MzOz+y/lR2Y6hiVJ3BKDF0S2NFHiF3/uR6sByQruqqavBoam4q7ItBuQaeHFdlz8e46Nm2XSaUB+gLcwihlLohDnwKerAaUZXvOirIocpyyluwHVDd7brmuxNzV9G/Rd138brCmGoiqL4SvFWuQ4JYzF0/gucoUZOB5guk7whLkSlaXGSpS+5luJOqluZmmnWpibK9WrWP+FR+gjIksnIhwpsiJB7KhodeToVo6OAolGsrOAEkxMrG1cPHqCiY+zjY0BJhiCSY5goiWU7AlmHIJZj3DmJZj9ATGDVYd8dD0PAAAAAElFTkSuQmCC"
        },
        {
          "id": "site-1787824421469",
          "name": "PVE 4",
          "url": "https://pve4.skyrisai.com",
          "description": "Proxmox虚拟化节点4",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABIFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1NTWysrLh4eHAwMBeXl4CAgLGxsb///+VlZUUFBTZ2dmHh4cEAgBpMwCsVADAXgCRRwApFAAfHx/l5eVzc3NrNADlcADfbQBWKgAsLCzv7+/+/v5fX18rKysDAQCdTQDjbwBKJAA8PDz29vb7+/s5OTkHBACtVQA5HABOTk78/PxISEgNBwC8XADYagArFQBiYmJWVlYWCwDHYgDPZQAfDwB3d3dlZWUgEADRZgDFYAAUCgCFhYVycnItFgDZagC4WgAMBgCDg4N5eXk8HQDgbQCpUwAFAwCqUwC5WgDGYQAVCgA9HgDkcABPJwBsNQDhbgBcLQBvNgC0WACaSwAxGABaD2HEAAAACnRSTlMAF0x6gCXB/132sRgSBQAAAYVJREFUeAF0TYURwzAMNCRVGcPMTPtPVysuw5ueTiYzKOPKBzij5A51AT+xUGW+XMEfrJaYq5j/a+AMOX+92e72d3+/227W8hdC6EwOx5PAWeZn5MfDzClh0rxo6OpIdWTaRfqMcDBMy3Zcz0c/AAjw9T3XsS3TAE4UCCOBOEkzEeRFkYsnK5MY3RAUUahq5E3b9SIaBnH1Y9ugV1dzAaYrW1RtBDEQxMKNr5M3MzOz+y/lR2Y6hiVJ3BKDF0S2NFHiF3/uR6sByQruqqavBoam4q7ItBuQaeHFdlz8e46Nm2XSaUB+gLcwihlLohDnwKerAaUZXvOirIocpyyluwHVDd7brmuxNzV9G/Rd138brCmGoiqL4SvFWuQ4JYzF0/gucoUZOB5guk7whLkSlaXGSpS+5luJOqluZmmnWpibK9WrWP+FR+gjIksnIhwpsiJB7KhodeToVo6OAolGsrOAEkxMrG1cPHqCiY+zjY0BJhiCSY5goiWU7AlmHIJZj3DmJZj9ATGDVYd8dD0PAAAAAElFTkSuQmCC"
        }
      ]
    },
    {
      "id": "category-1787824046244",
      "icon": "📊",
      "name": "服务监控",
      "order": 7,
      "sites": [
        {
          "id": "site-1784093853127",
          "name": "Grafana",
          "url": "https://grafana.skyrisai.com",
          "description": "告警仪表盘",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA21BMVEVHcEzwdRbqRB7wdhbrTxz4sw/qRx7qRh7rURztYRnqRB7rTx3pQx/rTh3sVBzqRx74uA/1oBHqRB7zihT0kxL0mhLyhxTpQx/mShLwdhbuZRnsVBztWhvtWhv2qhDpQx/0mRL2pxD1oRHyhxT0mRLzjhPwdhbteBTxexbxhBXwdxbqSB7uYxn3sBD5wA75vw/pQx/2pw/5vw/vbRj0nBLxgRXpQx/2qxD2pBHsVBzyiBTwehbxgRXzjhT3shD0nBLrTR3wdBfvbRjsWhv0lRPuZxntYBrqRx74uQ+KvehtAAAANnRSTlMAq+1SDtOGVCAVal6wRi/YZEya4COYHcsB0u2tcJ+j48jnznbvykcDumUtNcmGsLD5Bynz/pXhLF8RAAABT0lEQVQokXWRaXOCMBCGV0URUPCWetTbevW2aSkqKpX6/39Rd5OQgc74fGDezZPJZgNAilIBbtJmrHbL6QwxbrgBSdY2LYcV1Wq5UKqZ+gtLoHrrydVsNi3LsRhYGtXrGu5xpSxKZ6o+hsPacRYn6amBVWn+InJAzRYXdbLxviPCm6wdil1srR3lNLbneV0KlicpA/R7QvbCMKQWRhgWNLC7WNpQ7Au5iaKIDulHFpVuL4o6OCGf5ELQhJ2OvMPmcsnx8HDm0Hu/Z6TMnc8iZk6cOcbFnZSr00lEX0A7V744DOa+L6RR33Ho3Nxuscy0AD6wFvvcyTdR5xdYTtC5fCF+odYemamHnVG5b8Rl9QeZVnlu1DEPm8oB3AfEdthsjoNtEEyTfwjGX0lGryk5+kwCafKHwyH/SF8K/2Qlfy+uU7ler5W0c10V356f4vgHHgg/W8UCfb4AAAAASUVORK5CYII="
        },
        {
          "id": "site-1784093914556",
          "name": "Prometheus",
          "url": "https://prometheus.skyrisai.com",
          "description": "监控时序数据库",
          "icon": "https://prometheus.io/_next/static/media/prometheus-logo.7aa022e5.svg"
        },
        {
          "id": "site-1784094238980",
          "name": "Alertmanager",
          "url": "https://alertmanager.skyrisai.com",
          "description": "告警通知服务",
          "icon": "https://prometheus.io/_next/static/media/prometheus-logo.7aa022e5.svg"
        }
      ]
    }
  ],
  "title": "Skyris 内部导航",
  "search": "bing"
}
