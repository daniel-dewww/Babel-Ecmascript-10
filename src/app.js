import Photos from './photo';
import './style.css';
const photos = new Photos()
async function main(){
 
console.table(await photos.getPhotos()); 
}
main()