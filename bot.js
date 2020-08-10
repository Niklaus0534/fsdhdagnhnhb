const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('guildBanAdd' , (guild, user) => {
  let cezatakip = guild.channels.find('name', 'ceza-takip');
  if (!cezatakip) return;
  cezatakip.send('https://thumbs.gfycat.com/EagerFickleAmericancrow-size_restricted.gif **orijinaller kızdırılmaz!** '+ user.username +'**Bakıyorum da suç işlemiş,Yargı dağıtmaya devam** :fist: :writing_hand:  :spy:' );
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
      msg.channel.send('Aleyküm Selam Hoşgeldin !');
}
if (msg.content === 'Abim Niklaus nerede?') {
          msg.channel.send('hopp <@313729352363933706> neredesin laaa');

        }
              if (!msg.content.startsWith(prefix)) {
                 return;
              }
              if (msg.content.toLowerCase() === prefix + 'niklaus' ) {
                   msg.channel.send('https://i.makeagif.com/media/3-02-2016/b5Agms.gif')
              }
                   if (msg.content.toLowerCase() === prefix + 'rebekah' ) {
                        msg.channel.send('https://img-s1.onedio.com/id-545e6b645d99fb332d4f6ddf/rev-0/w-900/h-505/f-gif/s-786e80159cc6760ab9601489037673667f2dc4a1.gif')
              }
                 if (msg.content.toLowerCase() === prefix + 'caroline' ) {
                      msg.channel.send('https://i.pinimg.com/originals/79/57/d7/7957d7e92fe1d6cdfa56c0c238d441b5.gif')
                    }
                       if (msg.content.toLowerCase() === prefix + 'hırsız' ) {
                            msg.channel.send('https://data.whicdn.com/images/245037910/original.gif')
                   }
                       if (msg.content.toLowerCase() === prefix + 'aşk' ) {
                            msg.channel.send('https://data.whicdn.com/images/316720167/original.gif')
                          }
                                             if (msg.content.toLowerCase() === prefix + 'sonsuz' ) {
                                                  msg.channel.send('https://i.pinimg.com/originals/0c/dd/7e/0cdd7ece6574b859f6c1e3e7415cfa07.gif')
                                      }
                                           if (msg.content.toLowerCase() === prefix + 'elijah' ) {
                                            msg.channel.send('https://kitapmagarasihome.files.wordpress.com/2017/01/4bee6-tumblr_oj6wesdgmo1ugyj5ko2_500.gif')
                          }
                                            if (msg.content.toLowerCase() === prefix + 'bonenzo' ) {
                                               msg.channel.send('https://media1.tenor.com/images/79a7dec4150ef468c918926f66af46e8/tenor.gif?itemid=7937299')
                                             }
                                                               if (msg.content.toLowerCase() === prefix + 'delena' ) {
                                                                  msg.channel.send('https://64.media.tumblr.com/2c025c8b636dbabb5b44d6e8df9289f4/tumblr_ncv1bhGNAe1rl53x2o3_250.gif')
                                             }
                                                           if (msg.content.toLowerCase() === prefix + 'stelena' ) {
                                                                 msg.channel.send('https://media1.giphy.com/media/778YoSuulbjwY/giphy.gif')
                                             }
                                                        if (msg.content.toLowerCase() === prefix + 'haylijah' ) {
                                                             msg.channel.send('https://data.whicdn.com/images/310817227/original.gif')
                          }
                                   if (msg.content.toLowerCase() === prefix + 'üçüz' ) {
                                        msg.channel.send('https://data.whicdn.com/images/342327277/original.gif')
     }
              if (msg.content.toLowerCase() === prefix + 'kol' ) {
                   msg.channel.send('https://d19502wuiaq9sa.cloudfront.net/1200x800/images/5210/large%20(1).gif')
}
           if (msg.content.toLowerCase() === prefix + 'davina' ) {
                msg.channel.send('https://pa1.narvii.com/6358/9a3d07b2cf6d285046d6d1e1f9cd40ebde8333fa_hq.gif')
}
if (msg.content.toLowerCase() === prefix + 'kolvina' ) {
     msg.channel.send('https://i.pinimg.com/originals/0e/ca/c9/0ecac9105c1696bed50b5c5a16d7dca5.gif')
}
if (msg.content.toLowerCase() === prefix + 'elena' ) {
     msg.channel.send('https://i.pinimg.com/originals/22/96/2f/22962f1a21b41e7d3962d7eb14ba556e.gif')
}
if (msg.content.toLowerCase() === prefix + 'stefan' ) {
     msg.channel.send('https://thumbs.gfycat.com/AllAccurateBream-size_restricted.gif')
}
if (msg.content.toLowerCase() === prefix + 'damon' ) {
     msg.channel.send('https://media1.giphy.com/media/oEtKl4PHVxhAs/giphy.gif')
}
if (msg.content.toLowerCase() === prefix + 'katherine' ) {
     msg.channel.send('https://tv-fanatic-res.cloudinary.com/iu/s--Dag2BYZP--/t_slideshow/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1392816310/katherine-pierce-party-for-one.gif')
}
if (msg.content.toLowerCase() === prefix + 'jeremy' ) {
     msg.channel.send('https://thumbs.gfycat.com/WhimsicalExcellentCrab-small.gif')
}
     if (msg.content.toLowerCase() === prefix + 'tyler' ) {
          msg.channel.send('https://i.pinimg.com/originals/d4/9f/67/d49f673320d982df7cfa752d8a694e34.gif')
}
     if (msg.content.toLowerCase() === prefix + 'bonnie' ) {
          msg.channel.send('https://tribzap2it.files.wordpress.com/2016/09/the-vampire-diaries-witch-gif.gif?w=500&h=282')
}
     if (msg.content.toLowerCase() === prefix + 'enzo' ) {
          msg.channel.send('https://i.pinimg.com/originals/7e/79/bb/7e79bb5ec0d6bcd306a717bf5850b5e8.gif')
        }
             if (msg.content.toLowerCase() === prefix + 'matt' ) {
                  msg.channel.send('https://i.gifer.com/4yga.gif')
      }
   if (msg.content.toLowerCase() === prefix + 'hayley' ) {
        msg.channel.send('https://i.gifer.com/WyTw.gif')
}
if (msg.content.toLowerCase() === prefix + 'lexi' ) {
     msg.channel.send('https://thumbs.gfycat.com/OccasionalQuerulousDunlin-size_restricted.gif')
}
if (msg.content.toLowerCase() === prefix + 'kai' ) {
     msg.channel.send('https://64.media.tumblr.com/d2c8a08e52ded94a1be60c63fdcab22c/tumblr_ninficTX4m1rlvdl7o1_500.gif')
}
if (msg.content.toLowerCase() === prefix + 'anna' ) {
     msg.channel.send('https://thumbs.gfycat.com/FrankTerrificAnchovy-size_restricted.gif')
}
if (msg.content.toLowerCase() === prefix + 'sybil' ) {
     msg.channel.send('https://64.media.tumblr.com/31a20c0bae948dc83c71429a5181c87e/tumblr_inline_oigmwizkzv1sdhieq_500.gif')
}
if (msg.content.toLowerCase() === prefix + 'jo' ) {
     msg.channel.send('https://d.wattpad.com/story_parts/536441545/images/15140b8efce0b14c630685500526.gif')
}
if (msg.content.toLowerCase() === prefix + 'mikael' ) {
     msg.channel.send('https://media1.tenor.com/images/e38524396b48e5438f878b356ca63708/tenor.gif?itemid=13270845')
}
if (msg.content.toLowerCase() === prefix + 'marcel' ) {
     msg.channel.send('https://myinfiniteplaylistblog.files.wordpress.com/2018/04/diego-boneta-gif-source.gif?w=379')
}
if (msg.content.toLowerCase() === prefix + 'ikiz' ) {
     msg.channel.send('https://i1.wp.com/66.media.tumblr.com/cfae54e60b1bd3b2230d262315db5b29/tumblr_phjp33C3WD1xl18mfo1_540.gif?resize=540%2C270&ssl=1')
}
if (msg.content.toLowerCase() === prefix + 'lizzie' ) {
     msg.channel.send('https://media1.tenor.com/images/11e5ef98e504eed519c1466fb29a5a87/tenor.gif?itemid=12930713')
}
if (msg.content.toLowerCase() === prefix + 'josie' ) {
     msg.channel.send('https://i.pinimg.com/originals/04/b9/a7/04b9a76ec380b027dc85d8e7235b9ed0.gif')
}
if (msg.content.toLowerCase() === prefix + 'hope' ) {
     msg.channel.send('https://media1.tenor.com/images/9bb1114e4041c40cfa4638ea57a3e497/tenor.gif?itemid=13645559')
}
if (msg.content.toLowerCase() === prefix + 'freya' ) {
     msg.channel.send('https://i.pinimg.com/originals/46/d6/1d/46d61d7f3d3863f37c63b74a5fb1ad90.gif')
   }
   if (msg.content.toLowerCase() === prefix + 'darkjosie' ) {
        msg.channel.send('https://cdn.discordapp.com/attachments/740881053903749180/742157951099338783/image0.gif')
      }
    if (msg.content.toLowerCase() === prefix + 'alaric' ) {
         msg.channel.send('https://64.media.tumblr.com/9bfa15190d562cc1d86000a51d731e8d/tumblr_mtckdauuLY1r9xerro1_500.gif')
    }
    if (msg.content.toLowerCase() === prefix + 'finn' ) {
         msg.channel.send('https://64.media.tumblr.com/tumblr_mbirqlmVpZ1r5mqxjo1_500.gif')
    }
    if (msg.content.toLowerCase() === prefix + 'esther' ) {
         msg.channel.send('https://64.media.tumblr.com/d410bca341888bf248ea46ccd4ece9a2/dd3027602596cb99-23/s500x750/5416331cde5e77bd95c21e1b46daa9b0473aa237.gif')
    }
    if (msg.content.toLowerCase() === prefix + 'camille' ) {
         msg.channel.send('https://em.wattpad.com/f79e2552d4be4e7836bc68e54d2da7a6aeecfcd5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f50486d75494f764a3275334c68413d3d2d3433393932343536302e313464306365666564353064663235353730343439373332353039312e676966')
    }
    if (msg.content.toLowerCase() === prefix + 'klamille' ) {
         msg.channel.send('https://i.pinimg.com/originals/f5/61/b9/f561b964ded03227e1ad6a9bd978bd18.gif')
    }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.TOKEN);
