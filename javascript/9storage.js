localstorage
> presistant storage
> wrt to browser
> we have to remove manually

localStorage.setItem('mycity','Delhi')
undefined
localStorage.getItem('mycity')
'Delhi'
localStorage.removeItem('mycity')
undefined

sessionStorage
> temp storage
> save wrt to tab
> remove as soon as you close tab

sessionStorage.setItem('role','Admin')
undefined
sessionStorage.getItem('role')
'Admin'
sessionStorage.removeItem('role')

cookies
> save wrt to website
> expires in time

document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.961190882.1635318799; _gat_gtag_UA_131256843_1=1'
document.cookie="city=delhi; expires=Fri, 29 Oct 2021 01:00:00 UTC"
'city=delhi; expires=Fri, 29 Oct 2021 01:00:00 UTC'
document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.961190882.1635318799; city=delhi'