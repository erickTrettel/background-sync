# Background sync

[Background sync](https://developers.google.com/web/updates/2015/12/background-sync) é uma função do service worker que é capaz de armazenar uma requisição feita pelo navegador caso o app esteja offline e fazer a requisição assim que a aplicação reestabeleça a conexão com a internet.

### Para testar o background sync com esta aplicação, você deve seguir os seguintes passos:

1. Abra a aplicação e aguarde o carregamento.
2. Fique offline (desligue a internet, ou fique offline pelo Chrome DevTools).
3. Clique no botão `Fire event`
3.1. Ao clicar no botão, sua requisição será armazenada no navegador. Para visualizá-la, entre no DevTools e siga o caminho: `Application > IndexedDB > workbox-background-sync > requests > queueName`
4. Fique online novamente

## Service Worker Workbox

A fila de requisições ([Background sync queue](https://developers.google.com/web/tools/workbox/modules/workbox-background-sync#what_is_workbox_background_sync)) é possível através do uso do [Service Worker Workbox](https://developers.google.com/web/tools/workbox/modules/workbox-sw), um módulo para o service worker.
