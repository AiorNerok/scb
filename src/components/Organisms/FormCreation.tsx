"use client";

import React from "react";
import { useStaticData } from "@/store/StaticData";
import { useRecordCreation } from "@/store/RecordCreation";
import { useRecordStack } from "@/store/RecordStack";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IconPaperclip } from "@tabler/icons-react";
import { isChar, isNumber } from "@/utils";

const secret =
  "data:image/webp;base64,UklGRuQ9AABXRUJQVlA4WAoAAAAgAAAArwQAhgIASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg9jsAABBIAp0BKrAEhwI+7XS0U6mmtbCj0NoasB2JaW77yHQdDPSHOJ7PsL/+q4dOa0fVU9r+HzyvLv8Lxh9xM4KuCfmf9fkX+wcYwD53Q/RCjFXXTIHZFOnfbdE8z5AzoS8qWvgCY6tgzZcmu5CzBGNFJzeQpz6+66Z3a5LlyNcMyB2RTp6nePmEgIZSNR9rrurbb1SqVJQhCFHqHICdmw2K33QetXYeEgdpMo617JFZUzW8z3WC6+qQLRPHFpgJytipQtP0+rLAxam3Nj3tath9A07XdTAy0ro5FOoPJ16THAjRyrLUF3D6y5YKAxyYW3ZGYX8PqkxxTzggf+wBotqiRDnII91h2o/HHlF9pUga8wDJ7QsfsALEgO/R8Wk9/OpP49cmd6zCA/L2V0yCBM7V3xO+JRY0EnVEuZiLxP/XxljjvMHGMJMjrVpoK1eooJEsHaOJ2+LI4sq4DMJVoJJF9s2koBI591vq+dq91qCKaNB1zOhC++L3+ieS16ywBVmVGJpb19Hj4a8iSgal7UBTGr9en/a6DXC09UqOoB18uz2lN5s93QdavOZ2LpcZkRaHwFvCe5CvdlLJMyWwyY4NtjIM+UWWB2gp1gbGK94/fgXOQ2EseeWiLmhFkeVVNBZTSAlHwifZXBjPZfHzyka1tol8hs37mlmuBzs1tzLmsP5gGoIM4g/hv319sgr3VgqbSZmQL3Jgo/NknDsqFPE0w4nxFAmv6DmJhXPmlyi/ELdSN9NWxvDt6TOm/tcevAwkWtN4ZUXt6B59q8I9l831xQTSSeztex3sF05LrFK9w8yqYOF+hdfERGd50oNp6iCt3D4MDxEwlgprQe88Edtz9Fhg/cNSe3BPMxITiyb/KgqSTUaVKe/QEca99TvAfO+lzRWs7Uj+4+dpP8acB6eWJupa5ERDHCOy83AYERsoIYj2XmDBInyuhlv7dkIegG+eRS69iSYDE4Wi1keC9SxX4DF4bRobGNztddDkv28inctlqauwgE5mpX0hu/F4jyaUNQ8rVwXRlxXGKmQOxfn36AqfIcqgSvvCEn0yzAfctpySqFTi9RevTwzpDAk0FBid2IKzcihF0a6irABgV+6SY4LNgZgrZpKEyAW0nkT/xy0cytb2jJ+aN5L4DARDPMhyIJzjT6vRIaha4vPSw2OArYLahhDhiS4qKrsB2BHiBchxHiG1XoE3E4rl96nLi8FcinUhSPSW8BYEPoR2SiYgYjT8PotuOhNoJT/bGe0ZOmnnzMuzt6taabWZ/Xl+N0V6Fani1vOQfOnmcwFDt3Hn1G9lmfkRWxRzNA86oKUE7h2RT2Z8XDpKh1nEoHDsWyh8fSlgwqdFcQuTAv2VO9RTl3ZX8lPGnO1C5FOUWuum5A/vtzLXoUXo0jZDKKzvoyz/6huyjzELfMKT/ankfiOzc8iU7XRKm4Jewyp8eaGh3HZyjEqVCpHtzhV2/5MocaJFjDH44ei5FPTTn88sHCAibNZ6LpeInNO6IsEcTfdQs/F89QIYd048aRPNBrnw0xrnUoUrsjzJmstZZ/qGhe+py4vBXIp1cE8Boa6qUSW3qDvGEWuWH4gl38vH1nRC8Q/FvCXH+hkA4bNDBzfsvYt8406thE/ivzyt/re5lNICU13KNXquAJv33KpDqzTdD8ZBb+49vanoiEeJQXZPSloBp9PnWn8yUeumQOxfn36B+YY9S/mV1W8QN5h33ZPqz4xMk0R2AT69njnCDNyRaNS7t5PU9WY1kJ4R6JfXnAlCgT6+Lcc6/g+mdBd8avELteikoyh5GiNY+12FIezkI3K9Zc2FLolYpRbx2YW3Ow1sfUFod95ZEsu4Tk8tVsiAIZGlCwXLcT0LaM56mYk1PEECvgdkU6eXsrpnuH2ynbpgciYNjrgEqlywjqmfE6ZXfs9ba+U6rnbag6nkwxvXXK8VC51s+dpT6k0t9ccAE2nHSJj3bd88EqldQBRHrpkFeShYJnObfbmc9jJkcHOFogrzFVKoYAEfqKE4jd/9YTLzSh8IwsQuVnTMDqtA7XKvU0UODvZ44n/jdQhElXNK2xiy0L9AIcQEKsKIn1uaD209TdXyB2VlubSfxI2SyGKSBrub3NaQWhbDFIVukNDvKCXBk4g94xJfODojociBJsltEUUCQ67vxlswcul8c1RnxUdhvGS8qsAmBmFTp6ypnNvRQNYoVzsEdLbs7cibDh/WFsluP/HJmdSR5jOGOMYCioL9WR6iXI+sVSp2lgLXF6AjjXvqdi8Qk5/F3WWvfkIE4RVDXMfTrOdFZXyZWRhz/iyRO68GurBhcheDwsS7IARqqK1uGo0beEdGkXQzc/421n6LCfK4WqfdMIH6nKpg/4Cu1xatolrv2Wte5Dbayb/xHvQYSt8Xi2sHHQxoDev8rZIQmHn2VzIewsP4rhjYax+LwPYup53cTiBopLwFKPWhGz7eWkaAlMe+NjBSH8jMS2lOAmqvCaaC+9JnBdlE+d3nChBzWE6ojson9uNI1RyEU0fog7B207Nx8j0uYvSkaPjQ5ftqoxy/rFC1GsS5aoenA/brVQa0QEhkR6BqleQi8LETM++ocMQHageAASizK+947AU/MKdPU5URlQuRYRAixlBq/UYh6+HI1rCFM8Od/jfUdFQgHiAGAey2svdS9weQ9ACoQ2f6ToTDCxKd2fqkIHwyrcFGBZca+cyp02pgo/HkpocRSM5cv4ckZCudhirKzZLKzbEEO9OIzPPdv+NQwsTcyaoeZ2ou4xfrVSB/GWGtZGYd3ShiqJqGf4WuqLJkDsinKLXXTKH0J7GjQAJ96Q6p0U7Xl8c4T8yZKUGTs43NNhbA2SViJl0vQqMxbneyJxV9AqvJl/nIzwQNUk+8FTtaAOlQkMZD3BaHPXs7g9j7kHV3Yu43b6AgHF6ApP8PB5tTHjWY//llZpJuDn5ssHGWEYezrhdYhV5K7UVINYjiv7Furnc3UVWDp1REoDmzP2Wrcj46lFmmeqrwxTkU6epur5A7IgwaEjv+RciG8BbLtWIlSHzEFQGt4DDyq+KvBgG3TNKJFLptxzkS7oh8mYh0ItDbnu6iFJLwPUA19UxQZ3JLl3eFWVlgXhwtCa9KegLnz99Tl2nWoRrgo7TQsz0UsiX5a8ML7sxx/2thZNLwkWgGXaR9yKEHNSHL2CEa6CuhuHAgEMDXh3Q6YJD4PtddMgXuTBSEcX0aLtnfU0afswos7KdCZkC0JVh39y40Jtksu8uIbJZQVUj+EcE3c2a25lGA7jKTDWjW7+/bTVJW6n+33ayMgIa9IBIYPpVW3RcP/B9NH01Q1vLdn/EAsnVsqkf5zapUlH1Z0aHOgyjChKpy4vQBNcLU8L1A5ihInuoqoZ8hyiHuuHIYX5UYymzLs1uuc34KFq0Fo9P+riLNIzpOWqGxszWsmyPenwdJWwdK1+Hqzg4Ny7FvI7aesfc4CsCmrEIs7F2h/fYGKPnkdaARuwbZGtMhcgoCO+QkpwISU0Kw/16XCh2dIU8xKX6h5OnzssxDs4rOOy6AWOVuUfF8qGGKhN0Z1Bji7iiyzQHs8xaRyuUd7L92hPPJrRNAUZTC5WjaPsCmXoCU1lMjeWHQ1XXyf8UTAqhKGvoo2CxrQ76KBrV6zf/Uesu4RCrHiTaddAl1qIchAPWQ3yZlPRoGYaSACYhB0EE6DzKVPL41HzpexOYrRaZoNcLT18Z+m1+5Q04NupcqG8i1M8Ui/TMNMviy28qpXSDw3UujXN+/I6ZZQSmQO3GnWPtXrjrXRavodoTByb0IKemzW84QaHLTUb0Kpj4JA60I6nmvR1cAz09qT8UHmI8kj42uTgztiOo9wNozuc64dKXQx2/xg3NC3qcuosDImNjd/mEs5vx7QTnpq62i1HzC3EZhRAfSz0Npspip68VXvgGtFmfKrzL4cWRTp6nLqCanKrfObpI1c3Lu3vni4i4bNju0Tohoi6rQ+YEZVTEgaszUCVxJHqJIvJR0kFiQHunLeJIy3FNoURrflAcOJg/nXIp0xnIoC/FyXPyc8ObNO74+bVMCXX0JODXU6N/kYL+AFgzOrKO7TwVRuapET8YKPtddMgdkeT94Zsr0qv4wHTo0gnarEgbHVUlGcivwv4CVei7eEUEEvnqHnMllb7hxxxI12uT31OX3PllA7S3Jgo+1VUQjdvp1IjUC82kIIz6sNC4vBId0XZ633+lB4W6Sd5aT34Swmr7FUnSFxegJTIHZFQ2bgm9jlHrToqV2IZ4D9l6YYP93rPWkIm0xDSbjCm+anaBkWLxvs3ZhsO7hVNEJDaepy4vQBNcLT1NvxrRmCQR2NU0R+mTrAU8G05joV7qoTA9zCHjzkrb+0i6RwVmgj+qiUg6/UaNN5cXoCU6nVIs7vR0m13CFKhPudFpjdTfn2x02iv63oPcQAu8Sn+yDBk51Dtp6nLi88wynT1Nt8HQTgIoVmI89v8QnxGgE93U3LzFmpO7tv0VEHWCCwE8ZJbGCqjdXouRTp6vE38dIE6H9VBG46GdsVrasAQUTo36PsNQW8TV01MWnWTwBT7mxhXv2xgo+110x742MISXh+K9OHgK0opzioC0zFhhjt7EDLuV75XGtRqqMbSJeCVKh9gJB71OXF6AaST5d3M9GlPkC0xRpGIJTcGO49SgPf9YpP/FsNjzfAcJi5BWN8wdc1+2arK5UZ/vbVNBX/3tm110yB2RTlFrrpv2VEoHE65P8Lazl315F81lMbjD4sZpBqRG9bfHQMIYVdM1DYYOglMgdkU5kIPyYzdstsnSgySNqNG/UYkacAria9QgVjTtFdCnUyGF90IgONztddMgdkUmja67JmFv0jhXD0TnjQDM3sIhOSV5VENSHqXeoF2lyyZA7Ip0/F763DlRY99QYQT4D8D+svG/xEfJ9UXZqDObefi/fHF4nebfm5U9dpDC0nFdBe/QEpkDsh+XepfaNUhjKzJGiOK1nZ6TZY28gScoXJKeA7/mLi9ASmQZ3oHS5d5aWTWR1D9Q/kkShGU/XhY0elgtda72yinc/2EFjlsh+2nqcuL0BHGvfU57N7Eb5iRBNWN8VXHqvnW+Jq9AGrB83JhUBU5vtdMgdkU6wdCnGGg7QvSxOW+HNceeZ0tESIOwsHeaqSNIFnDXMVGhY/h83lMYBnKUg4pg65FOnqcuK3RyPVKxPjnYLt+OHgtS5g8+B21kEWgNW0onC09Tlx7fWNUMMYGmFmzGfeXeAjSBnNoSk6SZ+O9SbKlGOyCt0g2ngUfa66ZA7F+ffo01h4RfIDSkUmLBg9es/0ak4vSR5nhfcLT1OXF6IaZgOKKgLx3TkakvH84TEnSVHHUg0xBaku+AF0ag9Zia/50a0DJGBSQD6swybyaj10yB2RTp5eyumU3guFKrcuoCUr3Onglhi6HR1IyoIbT1OXF6W827CzIupVZJ1ftcegdVxHnDKNv+kLMMKYctgIFQj9Wh1m+gUOGdtPBe/QEpkDsh+XegJTJ3OF7wZaywY6ytOQimby4vQEpkD1+M6ucMDMwC1hw9Z5WO5wQIn0FEi9afk9WqZtWDkRaqCEz7pKXYEPemsa5FOnqcuK2cH9/VDJi6cC0WGX18/W5WPzUw1Y0JUD6O9bgkyvJMUoaLRHatHz+indY+lFkaQKMYOyTIN9iTSl1qGlDE2hucHHWhonW8IIxnEnnaACjKo76qf8gmv39gu20EpkDtEa/LEA7syEdGE0LYwaQhjuVSMQHBgnM//N44YPKW7/XVg1ZKhMv209TlxeCWbDtAbLST3tozUkDqGjaDvrOV3WSTW7fOQ0memFDKmVT/7I5cWgFgtdTAOl4mCGXXQJMjy55W7OM3iZdLlqcIXRijYoH1ifGfc3Bwm/BCrP5R6j8lSqhynegjinCC0NAh0a5/mp8hiAa9hsUUZsoveXF6At3ykUBjAx0rxmEG8wy29JlleRdEF8FswTB7SW74blWeUkYsB9GsJMcCZftp6nLi8EicRCeGDbvCeW2ZmdY2go5E9KnvBl6Tta8Mnwp1m/oz1ZJlxSGMOqwyilVElfUTVNn+ZujlbdMJpjmpSwx4oKSkxVKSgfaN7OeFMBnUBjT3wOyKdPU54OzX3LwWXu3IkQ5EIMFH2uumQOm/FIWmFBWgrQSAvaLmkUNDvQ384McDqJhHIjkRyFcrRHXy7qPXHrj1xyI5BYuPXHrj1w8XVZv/4F/kvyX5L8l+S/JfkvyX5L7nLD6gA/vv7BsZ3XTSjtVdyWTXpKzxibkr0fNkhTbrjE/gLojGgEorwizZPoIwqymBQP/OCHhqmmokZwsn4ghOFH8WMr1KjKpOTTgzrLsTuuxMKes6B44lP9t9IRxAtyJMKqBnlWfoaE8KeNly2itPJHBkS2hIZIqAB0ok+yC92Vkl3YM6PHDkUbq3gBObUUrN7txy5PffgR7mU9aUpRsIWVSEAYA26RrwONalxusYXEIpwjXUrhFNEUn4HolSXuJBXfEm0xTUyc4UWl666Xlj3P44K3iI1RXataO2zIgQH5cRIgdhgsXJKeQ9pY4XiJqU2mxS2Dv73/LBlmqYEVhEfiQjbKXxQHaIcOJ7oUO/w7+P/KDgvlT+bQf8BAZJnGK9ygQCiPlydTC4q0gtwZbfEDN33GIv5ZcrfTjS4sJtIhgs/U1tfjRWFt3C8jC1d6TBHCwzsb91F7halwMAwz8/d1a1hrmbmTxSHWwujwwMRpTciqnr0L1+rtOVLRFegM5uqp0rbU7ryKN17GYnN6o06fg3VSJOahJRD2RBPB4gMqJTMnI/ISgXQXyowXll9+Zpz317DvcL0VSFmwRPHRCeck3z0alRYtnxJ41XzrnUffOaasGorELcjOKAha8erXzw0M+g4FhGfSyCr96D78Liz4+x05AHvlRikfbvrxhk5mCOHQGJ8lvL4q9ye/bhAn6DzQcE8LSVXi85qPmqRMYKbQEjdrSCnKy08hXCmrAqolJToJrXYjQqn4WhCfiv/VdsbnH5j9UGqMNyljWXeIXJYGSf+ruQxtGxQmqHntgPqzMksvv6p6l55oQ1SKc4NyGkSBidYTHya6H9BkADcE1QlWuxxONGza6rph/qb+wU2aS2ubkrI+gpaYGk0LfC/0tV5mbswyFHqXbzWm39pes/8WywnQZI/b47OQL4LViQ1vKeAO8ito7KIQ/0XKVVQFj1FFu/50Fvm+hDc69QDm7CXL2fRglRppWYjRNyUfu1Y1xD5Hl2MCCoYh37d/UfduxHUWeYZcMiizeNz3qLf/0G8aeLMDRkOz5Ue/Zne3tKvKEm0a8LqURhcL2pkAQPU7GUC6QfzFyCHtHtDmvhRwnhpx0RFrmSl9RbtUa2+SkAMiCNqs/9OswBeYn9LZ4fcX87QfnNhc5G6h1yGDDEpj4dKXZz7Q2kSmaIKnDkouVCdYJo+/35tnD7mJjpHEN11et5p4Upzp3SYB7txIiJCyx3mEAljIDMNDsN3rw5j3rF5RiHDjTHmreLc2OYA4y4YllHa0J5hqr613PHgztViaEm9we70GRThff6ufYb4sLd3kwtzKgXRdYTUsOreT39a5J/Cba9xMKNynNpHdiqlVSR15RlAdR41IceUQJd0BhrOb6TCDNh+9q1hR9R6+gBkacv8OyD7lVMJQbpnnzxjSS1L4sniZxzBQjSGgoKH7gsxACw2u1KONttSc0ETYNtJuKRMMebRdbnGAbV+la6T8njlGTbfrONG2mgRw8fdLWKpc/YuTc0/nI0JF/6LIYrHxIRBIajN8CI2DCLKMkw/gIbQ8WijC77q1rI6rfb79c7sHFCPAQnKEpGXCTGT91b5SHxrK4lc/RSuBCNi00REtOLVXb9MlQoaIeTEa9eFfLfESyK2JwrmumkFso9NLyIqGECR3X7AFg69SAiQYkK7fMS779y3C964EgbPq5tqelUtIjzQ6E/n5ZdkwrcPFBfRo1spQWHGKAUmuYR4bikPl7EKMa+rLp/Ep9yPK8b95QNBLCMGFzUCXWBl5t99miY7N+85Z1DhumdHWijCrl5LAHKUMM5KiOAc72jlcTBOlhE3XStqCWXJFsB+rZ8q88wzoBz3Mz2F9AlyMvM8Eojku8EinIw9OhZDkyA5PVFQ+A6aidlYY3FJa2n+of7F6DLPRUJi664wv2K9gn2Qck/bYij/IXI6AIWk0r4On3c5O93t8qDG4qpyromM+swYExng4rEVm3ikZVuNC3531CfDpL2V2JMQnGLFayCZSAVkIRibQDAmQABFkZaAU4xwWE4C9Ad/SIDyLfK7YdR5TdaYPJjRzlcIV6QLKi3QTggfZivq+Zyb0y6jEgECqeROnc7fsXw9m5AX/TnZu76Cx2K7nc6Ek/GqIu0tfkKvs8DKfaP77JNmml1apjt6AOXOJYUbeyQzltYv+Z45LeJIZJXNcv+5mMB2fteHOMAAJwAvtVYkyPJfJtl/f1IvP4fMDuAHow9lM1jXQ0CwA9vUELMKahZktqr9Lof1Yx5hy10ZnxCD7kKCBNvBvzA8OrY+3lk0ZyqO2cPqvgbNY2fiNZKGZJ3M6JiKq6PzeeUMwPQ3n/h7FnTOcRXCBXQbP2Vi59keFT3ZQdBr4YAAH4IKHLvCdvyxJjhcvWbRG1ps4n78/cNyM71ta5eBprXxGjDianlOAXQshNM60RKVtRfxE4e8Klv+C6Iodn9qKb52fUQpvJ07BL9LTNpCDlbEf0tdPKblkJ/3aHs1BSPdn34E5dMKeHcEqPCUWk4CAnsU5rzQN9Tr70CDSIM5a4SfStNXUogaSoBAdroLxgC9QWPgtKfMs2F9DTd+8HHZW3SJnO9+EUg+qQtJZRsnjk/GXdvRZuZDj9YJiL46DmVhDWPQtfRn5/Bmycey1+16wu7JLWVqJr3yo6qKO32wwasJTqskvROdqDBaaYG8XyjmyljRJZo6QFc48rCXJgWrgAG9A18tsRicl0KJYsADvvjNmrzGh9N3RhJGBUOxnoaBpgQkAGUs5c47U1/MEIoBFYw526A/Mse7Z8WVjzUWYmnF7JOfnrhmsOlylFS4DzF38DLAQWg/GozrbMAA2PJ1XJ+GAgeXX3vL19o21wTAnkf6hB6kg4Is7nQL8NRVwiEH3aEk5yruzCHvM8afeLLqVGaFEFf9XWF+8qCvrmjtGfznRKv0DJaA1jcsoxmv7Elljcis+GbLwETQtQwxjfqNflEjEvE7bpz37c8yHuVUex7W+MZMlrN1T1FrUXSH5lX3pMTBFr6AAY4qxqhPmjDRL+cwKhSD92ffYC5N9yfutEidQid14+RdqDShyiYcdrQYe66SY2hLMnz78hapMAxBurFulNdSDgkHaqhdeuU3giaFUMIiu58tGPVKIXfFX35Ry4Alt0WaSnT840tudczuxQvNnOIJzwq1vNZrxt6seJ3T2iImmiOJ7kcW8O99pyprgakCpHNILUkSmlY3KvLboUl4mxdthSbtrRbRqtJ5fnJOih81JZT1uXTI0D73+vVOR8/5Jb1L8B5FJTkb3jaAp5bZSXmo29rCAXCRkAKmdxArIm78nMA/sAOgBMlvSA6EGymIoivHiVbgSwpxIA3asDqSFcgjHRmV0An3z/ecoYXEfAMzW5xCAgb1B3QYf3RuIb2maqZbvO+oJa3mnUGKnQHbwryPMBGAokOOM9xNi179zQvaLf+snFfXhP2u8l1jBoLikGKwcArOGLZNXZ3cfKpWiLo5zPdl0BeV27TJWmJvl+Boq/au2vIuU5TKK4pXIzJITrtK8GQLheJ/7JyN37y6LvccZK3SK4df8bd/wGY/G+W7gnO+ny52GbymCHGnScWPgjcwrtTv689X5iasSQeRzTFeHJjmHFqjB53BMdYKUAdhCsF4STFwGh9GNlU8QyE2DRbNYKpFE6ccnUauhKFk7Rzg0JYUWGUhewnvDIXIvk3kk93w59in1x8wIa19U4caUcAGjH66ed+si+i/bYFWlYkQsn7MO/Ohekj/3BOqzRkFv3S+Ta3WJ9iC83PWavYFgB+s2/II61J4NwAACXL3uvmN4jJQkqd+hZMm/Mc+L/NWHN4xj2Ibr+QGR8RLcqzIy9t7guoUgRT28eI0is8/ueQg4GiggWCBHcUOKISoDqB7xkmY8SHCPYn5CqmzhnYLjh4zRMivDBD7KLxUZekLx1ZrZ+ak57hj8urRcNlmNPaxs3vOp8PHrBZB6XrgHNRfFmPfDIQhVrPynGLQQWpGbDTPm8qleSFZ17Ay4z42ZNRmAW5FC6XvcOWl8oCN6qcIB5pjtLG5jG0X00elqhEClF2bbxHjFeCvZLX4oDz8fbHW8Y5anZiFJsyLDj8qhRzPkvQIsYfC12LbquBDYskkZiXvgUIXjxeJJ3jjsd0nld8L4h8ok2aW09zKZf2EU1r8gIF4/i+INWXA5dzrkoWAkG7mpku4EKThmTfFDXnEO0xZ7tx4AqkMMTQibJ1rv239UBtvGTsstzBgfpDmbnImAAA99hyOMxkIhTvxMGkLnI0d+Zw3lBA9JvIhm92wYVMNJ7S0R6W2OvSgd6G+xoI6SAX0ZpFmNkTHF5GCsRalWqWH8vPBDgo8p9/78Ktal3lD5FX7ytp0PDFr+MUIaRLkZtDhti7bb93LiLDUMQ+XnnGuglxA+LXTtUyMeFqzPP7WNS3MJbtOk0LHYQ85LKYmpFakJKASU3NpJ6kB5oBw/IvuPfHlqecLMjGt5feDsedTNqjQc3DHjUyb1dUgBwuwmB67iVwllJ+Kg4vY9fAooFNoyCyBaH6ZUdqryx/do23MV5Kb93nGTqWsqv3v9TyHIHR8Wtxm/yZ6HS8HafQcBVPvLJtn1JxM3LnSoRPhcJyx21kiqu1ykZkQC2Bw1u22J3r0WdsJ2rTVqwnySSibOmai/UF7q34b14MbEgVR7Rg0cZPv/HH5odqIAn38hgPjAkewKh2SKNWOMG7cTpnmFW/fsvZw1mM9VmmnhVWqjtrPdRGVhmoZDzvIbbKGucSRNU5ra30oPAdWM/c4lkRwkuS/tCbINYcabwnhX9ejpkxN5I8kyBLypOmOj/kAT3L9S6TTXUYHYD4jtCWN2nuMum+zFEAqgnizIV5CknjFVCcjH+C7ZFVVMajzCzPzy279FI/2UqwnCuxXuqdioDrFOqNVBGX2THoGIkq38fzL4tPD1lilkAtGQ8TOui2qAAQLmzZqsyFR8fPPVQ9l24+jpdgA959l5kBWMGvCm5Rr6ZafQ72Oj/q2kLQ8bcsq7cRB0AS2SGIsk5ztfZkwpLDELItuv3AKmpwKufmCgp26TuNbQ3PUyctKqZhq+Ed8Z0ZQlOAzMkJp/fVsMBno/1byVS6j4o0Uh+cp8ALrq0KfPaee8liXrhh6xasPV/FSJlpi9Sy2eLGx7+1UP7FRZ3bKgvhPBjXj9pz+DO5nG0EWOxd8uM2xtlRiN71uI06DmdJHbd++vT/vG3vtMnuD+nIZKZHxThpLAAEONswaY14m61/b4SbjM59IgyF8DtaeDqZWZBw59o686TaPzyOaIrZdZ2Lxov2XQATroA+GVChiQimg3NxtLWICTxGcbd6YKAdyAinIDnytXsBBX5tnpzyl8yd9wYU1dwKnCLIs30TfXdLefx8QmW5JPHRj+r8/IpHZzFUr096i8951q4faynmNSNPQ5LhwO6YRaP3PmyUF5r6MLK4jWD7bKUWGg2AyJPNogB/lQqqCTcvwu3QXu645bEYUMp9krpzzA11vBweqGEMfCOls65ZC601zxVyesv0kPMkLeWJcBzFpWqHCbe3sgQ9UGt763rnuh1WeJAVDKxqr8UaHDkRYA0TasgABNbXz2AcPoZ/5NNAfbaJAnu9mN2r51GL/UrFEAdGnGDG24My+lejvNvZ7gXRXl0aTUxKLrOyzLs84V7Es862BQdjtpUWYqnw8zc0wgtMYMT/1ZT5jslcieN1ibln0K+Bf2rYfN9VlwjnqsRqlr1wLQuFo7Akdj1Eoq4Is1VHwaE6vb74xqdqXzSSX3CpK6LV5CKCWto+x/aQU7NIv2/pd7wpgSBTbF/cKbR8scXU1vPnVs0senNzp59PwpS6kZ2hD8PMVUT8Ywrk0H0QRH6r1g4VipdWGXJt707veHIdJGafAsh3gqP0wSlcCQL/QnC0QevQXZA/cWBSSZVfykHnUXJd2ENbsAApebYPDwcOjK6YswMmJbNm3rRCtJ66i/4uPHrE9I88sBUq+QF6zh05poZHhEe869Pet5EsNUwyDueJSc610urY0M6CoWYwIuU1vK3+6Q6UhoADU2bKKFsgK2S9yFnMqidyJTCi3Lvz6bBa3kJnIYAMCfLFYnKFPnLs2uA7fFzNij1/JO+BjEJ6Iu446cKgrtfklVehNUNmyRVMB3KJPsvG5oZzdiNtT2tOz6J+It1rDHjLtZRkuMBB0iEVW6LgDugpSKUVvQBgCs9643u5aPGwlgd9pIKX6xhdzvAXjub/sNw5A7EHQENnxs3FRtvQ0CMJEWLXJq4XnWWg7GCUpBZGqttkB0u1oIQm6GyJXQBozAQau1QiqPCLa5Gxb2JLSXN4Y0Gk/X6tonpdhtlcZx41AkH2v/3OHq+lX+L0aMnLPgM575WWfdTmBd7W1G/6/bp8dtzB2w5kAvWgOHNzdXKbK6yY0nWB/mOqk7Kzk8NNKbGBzMnAel3A6dr46IAIwfxY9BiS/TqhobVz61tz+6EvaVyshBA1b2+gh4FZHeXNFDKRK3SZ6SyZzdr/A2iflPTK9m5g5mMSr2mLH7t13+yjainqUeQ5xT8MAAOH5YyV4JyO/nt7IBBb+jzs4E1N0wP5AQnYu4uYWcdxXD7qHFBOQRjnadsvfGADcpA1JapNjjVxrV1tLpFTDDgOQaImSRD6xXXFsmDB8ml45YV5weVSzCh8G+BjZKrn6tWhc2qR0h27kaB/2/YCzRFhBJh82u3SV5ZqF8epuJxK02oNzubD1wfNDvgvfmR7s7/3SQO1Saw4n5RzrMyHlcCBFNsItIuEk09ntRl7tP+jvDjfuksYJL9FSw5p7Sxb7RV3iqSPLz+WG5n5bCJ8ENhn8+b6Nh2vbBpk5JqtOhLH3g9m8VYcrLB3MTrI/pk2IyYiiyr/dYWWYgKxee+A5c3pNWuCefgmMp8Xh3laEHfncWro4c+Znu8ElC32nVZ7riHXPn5QCzHrrSHJFTVnXUgVWnH4bv8iRVt4/Z8p/dO9On4dP6b/dtzdBETDsqqhOvHV4rCKGDHK+AAACJo2NliCfZxpKI5ykRmB0KZMa0VOUw4ikJ9VhSXC4RC02l8N/ynnIUlLkBmjvSYSm335F/cBqya/4VQzj3pwQK6ngGZCyUuQzYoVZLFgYcN81cKOfnC715A1mfjmXcaXrpByguMuuKJl8rWFaPu3Lyj0Ur+Ni+EE/9Azvn6S9dG1jaTTHSUuTlav5ruvE2duksjuogID0E0dYiyvy9jknCk+iLXT2bY713pwFEvhMp98Zp3k69TWWLbAGMNWnh7+a+J4xY6iEajmYfapbrgmCLKrsBd97mI2jTyfkN6YKUX3GTWQu1tFg68X92whnOw3KxISeLRcMM7tQWn7efUdXcUqMRIwMudKMvZ2vNasVgoCYiWKYABAzheWKAvrjff8aeazDiH4nHpGneICYogbACfi52NzOXKu6hlsYvoNo7bnnl5Nm1sA4OSwTgcifpPE9hKm86geCz9J/l2ivM9cNtmmn+GcmB4mUPl80D+/ull+u22U1TfnJwV+WlkWKON+L1qbhafJVTkTZoQdF3+9EUkyvdnvBrDX0sVn+KVQDBrPZWiCS/G7dQwFwoxln0vQCxoLpanc4+1FzE5tHtTamxbjez+JTHGWR9SFqLkAjiauEa4Qfq6YOKaWliwdCnXfhDRmUrCsVU+0lqHn3WT0TQ6jjtzPKz1MuuJlmioVFdO7nHtc1LMaZOjgB5Ybetlv1A9FLEGPJURe2Bzw4wgJSKX/IPzmjeZjgFGAnTUGN5bxjnZu7Djkx0SKf3Pl8AAj8FpLpZW9WeRDOKVgQCF4qvFRRQSYddDLlwQ+QXFQhZvDAKQw79yHPPtqfU1TovLhVCHvKmf18AfGJf8H+VoB4qNuOM9E9txKGghiwViEjwAioC3CjxmdmF6hDocJ+kUl0jJ33F+lWlEAWhsfRqJbIMUzPxXfhlC6PSeNs+MHtdNbiyeBqQn/djMnEp+PcdpqiJbrrVRt1tNF2uIT971J11WGHEY09Cvu9+IElPCaHASu3uRVr/iJt9FpLhSQzn40bOlDoAUnf402Ibyw6l0E8cPfZ5M2RcadSkj1eKg928i+FL43jZKKrFesB9tIypFvW+RtI6R8AA0U58j81VgOjDdpbwZbYfnsNp7k/Um75FdceKUOatFZndgxLEM19OsUS0g705QxUn8XnBNV1YSSOE7Btv9kNISFjZ/EQrzkm/nzVwiEy+6n8KEHA2EpyCCkmnnj81oHKh1EUK8lflf3pE6Z3vG0ppPNBx6gJgSO5icHpxdGQXNJ1xIMzZslw9AdS50LUN5OgmJoGp2VG54/997HV7cRA0Aw1mlUJP2h9vX3yOWsRTpoKryDGAAMFW69FmGzoeZPqo9370ytMhOZtxuXCsvVuRJHnxMGNkpTHf6qGLWw0SOTkCQ8cnvaKYA49m/LWpsMIoLTkISz4b3ebV/uvRoghxVnAp0cTXnnZ6XtmuN451fYmotmuMJOPvwHz6q2mUQ4hgIPpVsrSHzhjzz0w0OH5V6JXCf5Y5fYcg7msRHPcj9OwsnawSqKGwzDkesAAJcvAVFPoEcY5Ey+rcXmkcXf+Za38ANZc8hBzKtgmmt+NUEn3qZGbCZMc/7X9iyyp8Wcjx0Db/wdYoVJUn5lYrOe+Epgnxgv1tUMmpyvHz6f5z1jqiK8Qt6N21ABddkg6uoHITcYa9iAEsQfqqxiuTBHDxJMImxJfs1xtDwwDf3jQUHUCiibW+LEymr/efcObG9L+0z1WrSka3kWgLDJ1p4XId4i61HOvm5IIefDDG0NmchcQOFOlfp9N4sG2KBVvk5xy4g3PzK9I/MhumWengCs3Gf1ZLV0jZ/ARr9fpRwCSjVtS46WsVBYaOprPRy5FYAOBAhpkmUV0R2cMoHzVhzroORjK0wea5SQl9vefAQo5DLt9e4+UrLzargSVzI6zljzAWUm6ybdsAyPz9l35vHSBEQ9yV2BpgoVc8lUV76t9DpTth7SpevGxp/uYyIAABHkfxhcq72O7VLNcwv0CUP2QelFA8YyLFrqD3nrEem19BMElbifLEUSRw2Wgcw1krahkp6/ETZMt87MSTsVQ9FMbxylUru0oNV79Sev0VczVKmMz/M1GAAIfo82FIp/JN/DGZ9cjLNdMM02iYR6hK8xp17v+B3WejoAtffLNnpJkuPVHHUVcp4rRWgTSu17gB9836eAJbRO731IzFiSQIo2aQ8NuA5BsdQ9VCmjR8zYf1bPc/K3ixewJW4eXIUxkE1Z8vQ7kOHs2N4/R93GIgIuUYVXB8P8HBLHPX/ZjCChu1Y5mOIGy0q28E3Q12vt8gZdFNsxpVJ1RAAB6IQmiqrtLv1jugi6E8lce9PBB4Uo/NwYtNzLH49A7wF88KuA354uYEAJs1QegWMDGXyNaRSFd39RVG0OSetPtQXmP09jRdl7pdK6j5ZAAfJ5LhlAw6l3mefwxu89kdj0iTFWExRYNZO57NVltYJM6WNlnOrgN3U29Hvc38mfWvO3oA0AqHP8mv2ay6EE9ZHyxtFouXrHuGnmUkL1EXCNxAEh+ABXbGoFXsKM8xcPPU7GSAAAAnouQ+cQKeRbF5OfElnZZvXoY20+NbKSnnS1CytUeD43fTtK1fossSUhbstXyRgUo2oh4Whpi5+2Q30zpyHpz+H5Jd+xU+jg0kCsQUQMjYVw0n26buLshxPt/s3mAJAm/+4rW12AOt5rX1IlYvCFNrWkUsJL4UDdrKqCNiqAI37SlSs43EdoXTt5vJeFAxO848Ra/R0q1fJ75/dZ5pbvI69rh8mJpOt7MOuN8GNbtjnkMKAiWi19IBNli7Sp2AAACktV8QE127mSMZSPGs8He31TB5kfClayqlhbkbWY153Rp+R0rHW1hoDBHvT3M6i3HBMpICr9rcg+pdYk6UX3V0QDcCTOrXI0Fi9lE3eorkrsQ8vV6SQRS1YNaAJ+VNkbf7uEBHd4IIT2zdvnefLU0FWKRweSJEo8KoCx5VmD0iJM5zQJhvRVpob2ovVHOjjdMD/uYAG0BYbuNojLfevJeiDIwB7rHNhuke1rMTocF5wqEfcN33tTRggOH50ClQuBUqfT/EjmUCZ5qi9uLJBNTzNLRHB+0gh7qNREKLTtN5rTLTjNc//1m+YABEn536s82wazmwCvngZibNtnAlt00mRTN8Lrjh8C3NRGZY4fIBysl9H/HuDP5rsRf0LCAtYn5CAm6BCa8oF584wm/PgluGY81klandzAUvCrsPJbkBOsb/ubWBnPU+uIS8q7WU+U8t40wSqf/LIe/Bu5IUxfxhAuw5TjCxwDXkM3jh2shn6ewnH5fY1wdOtht23ImIKZ5vpFSHQvFfuqqaww/SDtGz/AO9AA2zjgdgEl/mXV6ZCuSTHgzvqC/oRwU1C3bmdfDmz4ZtC7L3NVF11tzS7zNSdudR1qtK8oDs8s6dmyMTNfNNhubfvN7kKudFuoRT4mAAD0a39Xhe+cq/YrWRwjxpXEErGeBoVMaRhPQpSNggtTMV/aoe4fM+z0FS6yXHFUJSs1dLdsy+1jMsRnEmX/M5yP5xtP9oUxY8CLc+wHRZQkUriUUbIYAMRwKUuPufo5PeQ1Di+OIR6HwxukmBcarbdIdtRrmOVggRnh56iogKTuC5xkGBlfRXMK9GwPd+iImxi6Z6IPoGNgmZmVn3hO1rDFONvXaJfBGCZ4bw5/eq0V8lQC7UtyYTjBe9oKuMBlubN9pE0RkrkAAABfTkIzXPOlN7kzXSfAHpOa+N2RpYkC+ATe2PmW1ADB40I35SVuzg1QwNBiSWKGhQYmMPI0dxaxPVk7VcfNLrAFxvwIfe03pZ7Eb5sQb6HdADIpaZ6iDDhjRc6Ord+TnXLcXpIlVSUFU4+UszFZCWXAh4MfNrXoREAQM9/ex0s+MbsCWNE5ODGMc1QVStdPu3Nn5SPpTnbQpGLCWBw2hEDqRTF0CwAACwTiQpjj5v0fGLUEfzYP6KcdiCMpKh7rlH5+sIaXoducYHW1Sn/YFCoRMOy4GjT6BmcCbRGtgC5/S0CBdPfucA4ZF1XG9WAO6u3sDTtphXuBvFGzLnYJHVCdYPnDUihTrRKtBZiolHtbE4IgHwu6dtmxOC2M5gEhwyBTaY6brTZTrtCqXdUilu9rVYxlQTQ18yFx/dcXXWq+eAs646ecEAAC77JYJkQdSu8kA2rMN/W0oIzKP051oUHLanLPRwss4ef33qcZdCkeRutpzZrioYz20UG2eCaycgrqtIZ8UgIL+SnznSOYIwmE76zDghC5LQAUdhG6m3FnMXqUfPA+8iqo3TdqmZi7oS3DlZq3hgnSfBD+hITC8fSGiD07uUSJqqn7UIwUrNleluuPaAP/9zt+nI+BCZHQA4XPuQAAANOyTPD5mepl+xohUHWdiyCHdt7VB5L7a1p4FkxT0qa5Gr5xU5GApqtUIuR36ZfD6SuaSBNioBkaw6tTFeeoyQqI7+jIabo72jmJ0+l1Qev7RCcrWfNr0sCd205OwHW5WUV6y4nj/wglnc9Ub3Qte7jGxQ1Aq+r5mw0Ay3IlxlEINlOHPYzDOmTf1toB9otY7viSVXeX9KwlQp0AAAApwbr3jCuCH457xXJ37v9egQCvzkm0GiH3lxasyes+bWByK11df0HicggBrYb+BjAOQN9IoZbmRqnR0r5Z0NBhJc+Cv2dMFrPOArrMTmUTwfTBDrAmb6WlIqo8CmR/uTQ6BH2qBFgZDN/qFjek4QU+TaQ2G2e3ZMP/nzo7ICJXO/4OGpiB+f7i29AKQZh2v8y9Il3Nc1L/KJaaXwyveEpwAAAA/GqsvK4xqfLvMx1Gt1SlN1BjYpIAyA/s1a0lzejxLjCxUaxEBtWDBJNuymjxQDtNRbD34sz/eb2f/BaN4QOvyxHqPxb3KH/xvd9ANIPBRL4wCYg6dpi+p0CX/FcLRc4zNlx7bYwp7W2e4bgXVcXhUiOP3NvAYf2e+Wb6yWyjYOJ3SbBAALnE3qc/J3PQLTTkIu3NFKiBY9ER3uScCCffm0paNln6L4MGFWPFLCEFATB2s8LQraHySz37xM/HjKen978JXzqyVOFEOI/l92oVXrWvjnfoP43FH1MVb54HmPJTbVCTO/sfTBIdepSox1GgKW38fprPtinG/PqHk/j5dnxikE77iyZ5+M1kgh80Atsc5DfU/3E3TwMkZXN+6GPuUVQD18a3BXm4yj5uZais9BnaiXWuKziMH7AU4C8AfmIQRsZEfpSIynlyXAl74SJE/JSq24mcbaXz3aHfzWtgHU3ncc1s16WA2K/JZsdio4zwXyzurE9TSe+y0/m9fG3YXpggHgfvBa8YD0874+KctC5jkKLm9CKU8u1fPSQSfSIpEpqcYM244j9uadccG7Wi7JNXZMrtWlOIdhIiSOf4Df+dPxc015XvkLXw/kqK8j0p+7/4VelNvydoEnzXOhNbaUEL2pzG3/RTZvB7i8dow0eDRKDeq3AxqZXilDCkPYrDkKKJTFpX3L4bQCaG1+O+eWN3p9JKqpPLg55/hA9f6R0yHJoETJPbV+wzHKagT16OK/wzn1QE6zigyoQ9bEklgEBeoANsaNSQsteSoCDft3ZpX95xwgoSxh/GxxLFuBy1SiZG9G7vPT2Xv9imX5lVuXWsodgA4XSv/3s1wvsYklQ+lEI15EGi4QGoGO+Ob9l4jLh56Kt7T4zOvZ6/rV7C61QhhgcsOPDRLc0dJgiN/ru4a8C5PD3NGbz3rADK6O44B+fOnp6zPOA/tT5XFA7JAtnbAammi9xJcXqosTyZRm1Y9cJT0qQZdPb4N3LRBGtH3USpRQ0XnG3iDsoGfy54QyeOLjCpGGr4aAAALuc4xv+HglbfXDOHxQkFht8xSCH2VzcQCUo8egdwUf4PEMap7uWnz8jMkKfJBTl+PC7eSB65TKTPB1BhIlQZSxol/C8vA6Yzxlt/tiMKlYv05X+mcArADXuGr1QPudbzjWBYeUMDl68nY54TVBLsmi2VskwAgX1BrxGdh2UWbHDxiBnctT4eyebboE3MfjrhDoM7AQymULbLT86SnhT6pwweC9Gb0f45tZnUuGEf1j0qAArYtF87HSUOanxZtSDkezs/EkCmHwLPzsezY/xZLWnfL7fcwa+yTy/yb1pQzZQIQCmx7YI7RiklMLowH28Z1jPYXHb5h3/LwrwoeNBMt1ndjcp1sLmr6ajqpXuPHG5LYTl8GpNoBvXsHAMFG7dR/Mbm9v8FnFED9ffwNVbuoFdVm+MFbIj6Mc0auwxE/TGerKLI426rRa2+Gaso3TXCxaC+k7k4NU2rtg8oaxtvkIbYjPMqfRkALuk/aZ+knqOZq3sDBuiZnC+BCNoE/nP9FUyvqP70kEN6Ae4Zyw3jWTXGFfyyKP2b2AIk8pTgeK0aa8jnl14Wci5fasI3oBMDuwss4knM2nI9zfJE0v9rEC80X3T+Js9lEzMoebypCBi/Drp9reSbCU3pbug9faL+f+67Io9fIqUnYDAC4R42V2nmVwwStn7yXTKLCO/4b95LIi65ltCs7NMbgaovJVvcNHJEJyi3KonQIXqQtuGG8Ki3iBnawjcWBv3R50BsUrROoObt/CeLHnBZ3YjUe8qMJ05GDzKj1BH1/1JfJvpQtQUDbkuXbSjVrR9j2v1gZgzWEFA9sSmSjvQqIAHetUQSvgZUR/JZrdGfBMrSoPuPYzKO3Psz/NNXhkgXyiR5n/ZpPPEK66/XVW+jEISBA3NGeg3Ml9vGi4P3Wfd//JO8ET5oNiO3ENUYgbLDdfww0KmLe5QN8l7oQpt8VCtM3PuhgkRJ3IX5uMdGAhsdVwE97t53IKirFtUI1qoOm9Xk+dFefiwXwfAk0oVbAwleIBFcCha0DXBzbt+u/S5xt3fHFQGX0IFCfOOWaWC9X/9Obwx7I8EyL1gu3mXVNlvIecKqgwUgE44SVTDTGIN8evIhUag1agGbLfaMU3p9dVjYbyYqvxAyk4TuTBWiuQnx4k6BLtSosl9rm+7bXRChK+0h4CMp7S21TS+39CE2/xLobet9KPZZoacoNcRzCv9MwVFcedX7/SpIoHie/mXDxpHuLQI8YF2EkErv997zoNu55LQBbXgiSPoPD9TGAs4KviQCOVslJZBSWcTMPNNlpmLv+1oQAAAWUULaWgkrelFUoCfb4vpEAI4xGYtR+IqkbUA6TYHLGU9KmQAAAcD4QBQAA";

const DynamicExperience = dynamic(
  () => import("./FormCreationPart/Experience"),
  {
    loading: () => <Image width={1200} height={647} alt="" src={secret} />,
  }
);

const DynamicExpectations = dynamic(
  () => import("./FormCreationPart/Expectations"),
  {
    loading: () => <Image width={1200} height={647} alt="" src={secret} />,
  }
);

const DynamicPublication = dynamic(
  () => import("./FormCreationPart/Publication"),
  {
    loading: () => <Image width={1200} height={647} alt="" src={secret} />,
  }
);

type Props = {};

export const FormCreation = ({}: Props) => {
  const router = useRouter();
  const StatusPositionFilter = useStaticData(
    (state) => state.StatusPositionFilter
  );

  const { RecordMutation } = useRecordStack();

  const {
    Position,
    PositionUpdate,
    Name,
    NameMutation,
    IsAgree,
    IsAgreeMutation,
    Record,
    Expectations,
    Clean,
    ExpectationsMutation,
  } = useRecordCreation();

  return (
    <>
      <form className="flex flex-col gap-3 w-[586px]" onSubmit={() => ({})}>
        {Position === StatusPositionFilter[0] && (
          <DynamicExperience
            BeforeBegin={
              <label>
                Name
                <input
                  type="text"
                  className="border focus:outline-none px-4 py-2 w-full border-black"
                  placeholder="Name"
                  value={Name}
                  onChange={(e) => {
                    let char = e.target.value;
                    if (isChar(char)) {
                      NameMutation(char);
                    }
                  }}
                />
              </label>
            }
          />
        )}

        {Position === StatusPositionFilter[1] && (
        <DynamicExpectations
          AfterEnd={
            <>
              <label>
                Contacts
                <div className="flex flex-row gap-2">
                  <input
                    type="tel"
                    className="border focus:outline-none px-4 py-2 w-full border-black"
                    placeholder="Phone"
                    value={Expectations.Contacts.tel}
                    onChange={(e) => {
                      let val = e.target.value;
                      // `+7(${n1}${n2}${n3})${n4}${n5}${n6}-${n7}${n8}-${n9}${n10}`
                      if (isNumber(val) || val === "") {
                        ExpectationsMutation({
                          Contacts: {
                            tel: val,
                            email: Expectations.Contacts.email,
                          },
                        });
                      }
                    }}
                  />
                  <input
                    type="email"
                    className="border focus:outline-none px-4 py-2 w-full border-black"
                    placeholder="Email"
                    value={Expectations.Contacts.email}
                    onChange={(e) => {
                      let val = e.target.value;
                      ExpectationsMutation({
                        Contacts: {
                          email: val,
                          tel: Expectations.Contacts.tel,
                        },
                      });
                    }}
                  />
                </div>
              </label>
              <div>
                <div className="flex items-center mb-7 gap-4">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="telegram"
                        type="checkbox"
                        value={""}
                        checked={Expectations.soc.telegram}
                        onChange={() =>
                          ExpectationsMutation({
                            soc: {
                              telegram: !Expectations.soc.telegram,
                              whatsapp: Expectations.soc.whatsapp,
                            },
                          })
                        }
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="telegram"
                        className="font-medium text-gray-900"
                      >
                        Telegram
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="whatsapp"
                        type="checkbox"
                        value={""}
                        checked={Expectations.soc.whatsapp}
                        onChange={() =>
                          ExpectationsMutation({
                            soc: {
                              whatsapp: !Expectations.soc.whatsapp,
                              telegram: Expectations.soc.telegram,
                            },
                          })
                        }
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="whatsapp"
                        className="font-medium text-gray-900"
                      >
                        WhatsApp Men
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-14">
                <label
                  htmlFor="upload"
                  className="inline-flex flex-row gap-1 items-center"
                >
                  <IconPaperclip size={30} /> <span>Upload a photo</span>
                  <input
                    id="upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              </div>
              <button
                onClick={() => PositionUpdate("Publication")}
                type="button"
                className="hronit-shadow bg-[#CEFF1A] text-black w-[135px] px-8 py-3"
              >
                Continue
              </button>
            </>
          }
        />
        {/* )} */}
        {/* 
        {Position === StatusPositionFilter[2] && (
          <DynamicPublication
            AfterEnd={
              <>
                <div>
                  <h3 className="text-xl mb-4">
                    <span className="text-cyan-500 cursor-pointer">
                      Confirm
                    </span>{" "}
                    your consent to the processing of personal data
                  </h3>
                  <div className="flex gap-5">
                    <label htmlFor="agree" className="flex gap-2 form-control">
                      <input
                        onChange={() => IsAgreeMutation(true)}
                        id="agree"
                        type="radio"
                        name="confirm"
                        checked={IsAgree}
                      />
                      Agree
                    </label>
                    <label
                      htmlFor="disagree"
                      className="flex gap-2 form-control"
                    >
                      <input
                        onChange={() => IsAgreeMutation(false)}
                        id="disagree"
                        type="radio"
                        name="confirm"
                        checked={!IsAgree}
                      />
                      Disagree
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    disabled={IsAgree === false}
                    onClick={() => {
                      RecordMutation({
                        ID: crypto.randomUUID(),
                        Name,
                        ...Record,
                        ...Expectations,
                        id_vacancies: JSON.parse(
                          localStorage.getItem("id_vacancies")!
                        ),
                      });
                      router.push("/");
                      Clean();
                      PositionUpdate("Experience");
                    }}
                    type="button"
                    className="w-full hronit-shadow  disabled:bg-gray-300 bg-[#CEFF1A] text-black px-8 py-3"
                  >
                    Publish
                  </button>
                </div>
              </>
            }
          />
        )} */}
      </form>
      <aside className="min-w-[233px] flex flex-col gap-3 items-baseline w-[200px]">
        {StatusPositionFilter.map((el) => (
          <p
            key={el}
            className={` ${
              Position === el
                ? "underline-offset-4 decoration-2 underline text-3xl"
                : "text-xl "
            } font-semibold cursor-pointer`}
          >
            {el}
          </p>
        ))}
      </aside>
    </>
  );
};
