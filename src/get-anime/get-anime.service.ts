import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class GetAnimeService {
  async findAll() {
    let index = 1;
    const aniMeiArr = [];
    const getAnimeImg = async () => {
      const res = await axios.get(
        `https://www.nyafun.net/show/1/page/${index}/year/2024.html`
      );
      const $ = cheerio.load(res.data);
      if ($('.public-r .public-list-box').length > 0) {
        $('.public-r .public-list-box').each((i, el) => {
          $(el)
            .find('.public-list-div')
            .each((i, el) => {
              aniMeiArr.push(
                $(el).find('.public-list-exp').find('img').attr('data-src')
              );
            });
        });
        index++;
        await getAnimeImg();
      } else {
        Promise.resolve(1);
      }
    };
    await getAnimeImg();
    this.whiteAnimeImg(aniMeiArr);
    return aniMeiArr;
  }
  //   写入写真
  whiteAnimeImg(urls: string[]) {
    urls.forEach(async (e) => {
      const res = await axios
        .get(e, { responseType: 'arraybuffer' })
        .then((res) => res.data);
      const ws = fs.createWriteStream(
        path.join(__dirname, '../images/cos/' + new Date().getTime() + '.jpg')
      );
      ws.write(res);
    });
  }
}
