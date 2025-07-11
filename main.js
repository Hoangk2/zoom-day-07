// https://api01.f8team.dev/api/address/provinces
// https://api01.f8team.dev/api/address/districts?province_id=1
// https://api01.f8team.dev/api/address/wards?district_id=1
const apiBase = "https://api01.f8team.dev/api/address";


function getDataLocation(method, url) {
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.open(method, url);

    xhr.onload = function () {
      if (xhr.status === 200) {
        const contentType = xhr.getResponseHeader("Content-Type");
        const isText = contentType.includes("text");
        if (isText) {
          resolve(xhr.responseText);
        } else {
          resolve(JSON.parse(xhr.responseText).data);
        }
      } else {
        reject("Không có dữ liệu trả về!");
      }
    }

    xhr.onerror = function() {
      reject(new Error("Lỗi mạng không hợp lệ"));
    }

    xhr.send();
  })

}

function getFirstDistrict(firstProvinceId) {
  return getDataLocation("GET", `https://api01.f8team.dev/api/address/districts?province_id=${firstProvinceId}`);
}

function getFirstWard(firstDistrictId) {
  return getDataLocation("GET", `https://api01.f8team.dev/api/address/wards?district_id=${firstDistrictId}`);
}

getDataLocation("GET", "https://api01.f8team.dev/api/address/provinces")
  .then(provinces => getFirstDistrict(provinces[0].province_id))
  .then(districts => getFirstWard(districts[0].district_id))
  // .then(wards => console.log(wards))
  .catch(error => console.log(error))


async function getData() {
  try {
    const provinces = await getDataLocation("GET", "https://api01.f8team.dev/api/address/provinces");
    const firstProvinceId = provincess[0].province_id;

    const districts = await getDataLocation("GET", `https://api01.f8team.dev/api/address/districts?province_id=${firstProvinceId}`);
    const firstDistrictId = districts[0].district_id;

    const wards = await getDataLocation("GET", `https://api01.f8team.dev/api/address/wards?district_id=${firstDistrictId}`);
    console.log("🚀 ~ getData ~ wards:", wards)
  } catch(error) {
    console.log(error.message);
  }
  
}

getData();