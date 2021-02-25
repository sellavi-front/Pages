import RequisitesEntity from './Requisites/Requisites.js'
import { req, about } from './requsites.js'

const orgName = Object.values(req)[0]

if (location.href.includes('term-of-use')) {
  const r = new RequisitesEntity(req, 'beforeend', orgName)
  r.setTemplate()
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child')

  const r = new RequisitesEntity(req, 'afterend', orgName, media)
  r.setTemplate()
}


if (location.href.includes('policy')) {
  const r = new RequisitesEntity(
    req,
    'afterend',
    orgName,
    document.querySelector('#content > div > div'),
  )
  r.setTemplate()
}

if (location.href.includes('pay-delivery')) {
  const r = new RequisitesEntity(
    req,
    'afterend',
    orgName,
    document.querySelector('#content > div > div'),
    about,
  )
  r.setTemplate()
}