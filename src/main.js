'use strict';

function notifyUser() {
  let notif = document.getElementById('resultStats');
  notif.innerHTML = `${notif.innerText} [Ads removed by ad-blocker; Happy searching ;)]`;
}

function removeGoogleAdsResults() {
  let adElement = document.getElementById('taw');
  if (!adElement) {
    return false;
  }

  adElement.style.display = 'none';
  return true;
}

if (removeGoogleAdsResults()) {
  notifyUser();
}
