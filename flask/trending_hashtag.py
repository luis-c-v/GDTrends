from TikTokApi import TikTokApi
import json

def get_cookies_from_file():
    with open('cookie.json') as f:
        cookies = json.load(f)

    cookies_kv = {}
    for cookie in cookies:
        cookies_kv[cookie['name']] = cookie['value']

    return cookies_kv


cookies = get_cookies_from_file()


def get_cookies(**kwargs):
    return cookies


def get_trending(count=100):
    with TikTokApi() as api:
        api._get_cookies = get_cookies
        hash={}
        sounds={}
        for video in api.trending.videos():
            sound_id,sound_info=extract_sound_info(video.sound)
            if sound_id in sounds:
                sound_info = sounds[sound_id]
                sound_info['count']=sound_info['count']+1
                sounds[sound_id] = sound_info
            else:
                sounds[sound_id]={'info':sound_info,'count':1}
            for each in video.hashtags:
                name = each.name
                if name in hash:
                    n=hash[name]
                    hash[name]=n+1
                else:
                    hash[name]=1
        hash = {k: v for k, v in sorted(hash.items(), key=lambda item: item[1],reverse=True)}
        sounds = {k: v for k, v in sorted(sounds.items(), key=lambda item: item[1]['count'],reverse=True)}
        print(hash)
        print(sounds)


def extract_sound_info(sound):
    data={}
    return sound.id,sound.info()


def get_top_videos_for_hashtag(keyword,count=3):
    with TikTokApi() as api:
        api._get_cookies = get_cookies
        hashtag = api.hashtag(name=keyword)
        video_list=[]
        videos = hashtag.videos(count)
        for each in videos:
            if len(video_list)>0:
                break
            video_list.append(extract_video_details(each.info()))
        return video_list

def extract_video_details(video_info):
    data = {}
    
    data['id']=video_info['id']
    data['cover']=video_info['video']['cover']
    data['play_url']=video_info['video']['playAddr']

    return data




# get_top_videos_for_hashtag("foryou")
# simple()

get_trending()