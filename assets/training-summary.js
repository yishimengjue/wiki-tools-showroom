/* Derived from the seven-repository review; corrections are listed in the payload. */
window.WIKI_TRAINING_DATA = {
  "sourceReviewDate": "2026-09-07",
  "revisionDate": "2026-09-08",
  "tools": [
    "local-skill",
    "devinwiki",
    "deepwiki-open",
    "openwiki",
    "codewiki"
  ],
  "definitions": [
    [
      "有",
      "找到能支持该检查点、且关键结论与源码对应的材料。"
    ],
    [
      "部分",
      "有相关材料，但缺少关键环节，或仅覆盖早期版本。"
    ],
    [
      "需纠错",
      "有相关材料，但关键描述与源码不符，或不同章节相互矛盾。"
    ],
    [
      "未见",
      "本次原始Wiki中没有找到满足要求的材料，不代表工具没有生成它的能力。"
    ],
    [
      "无成品",
      "该仓在本次历史运行中失败或工具版本不支持，和内容状态分开统计。"
    ]
  ],
  "dimensions": [
    [
      "A",
      "理解局部实现",
      "连续代码、变量与运算上下文"
    ],
    [
      "B",
      "正确调用接口",
      "参数、默认值、返回值与调用"
    ],
    [
      "C",
      "理解数据变化",
      "字段转换与具体输入输出规则"
    ],
    [
      "D",
      "处理失败边界",
      "特殊输入、异常与现存缺陷"
    ],
    [
      "E",
      "理解状态和顺序",
      "初始化、更新、收尾及并发"
    ],
    [
      "F",
      "定位跨文件关系",
      "调用方、被调方和数据传递"
    ],
    [
      "G",
      "按上下文补代码",
      "前文、缺口、后文和正确答案"
    ],
    [
      "H",
      "根据测试判断对错",
      "具体测试输入与明确预期"
    ],
    [
      "I",
      "核验实际运行结果",
      "示例对应的执行记录和环境"
    ],
    [
      "J",
      "追溯源码证据",
      "材料准入项：文件与符号/行号"
    ]
  ],
  "counts": {
    "A": {
      "local-skill": {
        "yes": 0,
        "partial": 7,
        "fix": 0,
        "missing": 0,
        "no_artifact": 0
      },
      "devinwiki": {
        "yes": 2,
        "partial": 5,
        "fix": 0,
        "missing": 0,
        "no_artifact": 0
      },
      "deepwiki-open": {
        "yes": 4,
        "partial": 0,
        "fix": 1,
        "missing": 0,
        "no_artifact": 2
      },
      "openwiki": {
        "yes": 1,
        "partial": 3,
        "fix": 3,
        "missing": 0,
        "no_artifact": 0
      },
      "codewiki": {
        "yes": 0,
        "partial": 5,
        "fix": 0,
        "missing": 0,
        "no_artifact": 2
      }
    },
    "B": {
      "local-skill": {
        "yes": 0,
        "partial": 6,
        "fix": 1,
        "missing": 0,
        "no_artifact": 0
      },
      "devinwiki": {
        "yes": 0,
        "partial": 1,
        "fix": 6,
        "missing": 0,
        "no_artifact": 0
      },
      "deepwiki-open": {
        "yes": 1,
        "partial": 2,
        "fix": 2,
        "missing": 0,
        "no_artifact": 2
      },
      "openwiki": {
        "yes": 1,
        "partial": 2,
        "fix": 4,
        "missing": 0,
        "no_artifact": 0
      },
      "codewiki": {
        "yes": 1,
        "partial": 4,
        "fix": 0,
        "missing": 0,
        "no_artifact": 2
      }
    },
    "C": {
      "local-skill": {
        "yes": 3,
        "partial": 3,
        "fix": 1,
        "missing": 0,
        "no_artifact": 0
      },
      "devinwiki": {
        "yes": 1,
        "partial": 2,
        "fix": 4,
        "missing": 0,
        "no_artifact": 0
      },
      "deepwiki-open": {
        "yes": 2,
        "partial": 1,
        "fix": 2,
        "missing": 0,
        "no_artifact": 2
      },
      "openwiki": {
        "yes": 3,
        "partial": 2,
        "fix": 2,
        "missing": 0,
        "no_artifact": 0
      },
      "codewiki": {
        "yes": 2,
        "partial": 3,
        "fix": 0,
        "missing": 0,
        "no_artifact": 2
      }
    },
    "D": {
      "local-skill": {
        "yes": 1,
        "partial": 4,
        "fix": 2,
        "missing": 0,
        "no_artifact": 0
      },
      "devinwiki": {
        "yes": 0,
        "partial": 3,
        "fix": 4,
        "missing": 0,
        "no_artifact": 0
      },
      "deepwiki-open": {
        "yes": 0,
        "partial": 4,
        "fix": 1,
        "missing": 0,
        "no_artifact": 2
      },
      "openwiki": {
        "yes": 1,
        "partial": 4,
        "fix": 2,
        "missing": 0,
        "no_artifact": 0
      },
      "codewiki": {
        "yes": 3,
        "partial": 2,
        "fix": 0,
        "missing": 0,
        "no_artifact": 2
      }
    },
    "E": {
      "local-skill": {
        "yes": 3,
        "partial": 2,
        "fix": 2,
        "missing": 0,
        "no_artifact": 0
      },
      "devinwiki": {
        "yes": 0,
        "partial": 3,
        "fix": 4,
        "missing": 0,
        "no_artifact": 0
      },
      "deepwiki-open": {
        "yes": 1,
        "partial": 1,
        "fix": 3,
        "missing": 0,
        "no_artifact": 2
      },
      "openwiki": {
        "yes": 3,
        "partial": 1,
        "fix": 3,
        "missing": 0,
        "no_artifact": 0
      },
      "codewiki": {
        "yes": 1,
        "partial": 3,
        "fix": 1,
        "missing": 0,
        "no_artifact": 2
      }
    },
    "F": {
      "local-skill": {
        "yes": 3,
        "partial": 2,
        "fix": 2,
        "missing": 0,
        "no_artifact": 0
      },
      "devinwiki": {
        "yes": 0,
        "partial": 0,
        "fix": 7,
        "missing": 0,
        "no_artifact": 0
      },
      "deepwiki-open": {
        "yes": 0,
        "partial": 2,
        "fix": 3,
        "missing": 0,
        "no_artifact": 2
      },
      "openwiki": {
        "yes": 5,
        "partial": 0,
        "fix": 2,
        "missing": 0,
        "no_artifact": 0
      },
      "codewiki": {
        "yes": 3,
        "partial": 2,
        "fix": 0,
        "missing": 0,
        "no_artifact": 2
      }
    },
    "G": {
      "local-skill": {
        "yes": 0,
        "partial": 0,
        "fix": 0,
        "missing": 7,
        "no_artifact": 0
      },
      "devinwiki": {
        "yes": 0,
        "partial": 0,
        "fix": 0,
        "missing": 7,
        "no_artifact": 0
      },
      "deepwiki-open": {
        "yes": 0,
        "partial": 0,
        "fix": 0,
        "missing": 5,
        "no_artifact": 2
      },
      "openwiki": {
        "yes": 0,
        "partial": 0,
        "fix": 0,
        "missing": 7,
        "no_artifact": 0
      },
      "codewiki": {
        "yes": 0,
        "partial": 0,
        "fix": 0,
        "missing": 5,
        "no_artifact": 2
      }
    },
    "H": {
      "local-skill": {
        "yes": 2,
        "partial": 5,
        "fix": 0,
        "missing": 0,
        "no_artifact": 0
      },
      "devinwiki": {
        "yes": 1,
        "partial": 1,
        "fix": 4,
        "missing": 1,
        "no_artifact": 0
      },
      "deepwiki-open": {
        "yes": 1,
        "partial": 3,
        "fix": 1,
        "missing": 0,
        "no_artifact": 2
      },
      "openwiki": {
        "yes": 3,
        "partial": 2,
        "fix": 2,
        "missing": 0,
        "no_artifact": 0
      },
      "codewiki": {
        "yes": 1,
        "partial": 3,
        "fix": 0,
        "missing": 1,
        "no_artifact": 2
      }
    },
    "I": {
      "local-skill": {
        "yes": 0,
        "partial": 0,
        "fix": 0,
        "missing": 7,
        "no_artifact": 0
      },
      "devinwiki": {
        "yes": 0,
        "partial": 0,
        "fix": 0,
        "missing": 7,
        "no_artifact": 0
      },
      "deepwiki-open": {
        "yes": 0,
        "partial": 0,
        "fix": 0,
        "missing": 5,
        "no_artifact": 2
      },
      "openwiki": {
        "yes": 0,
        "partial": 1,
        "fix": 0,
        "missing": 6,
        "no_artifact": 0
      },
      "codewiki": {
        "yes": 0,
        "partial": 0,
        "fix": 0,
        "missing": 5,
        "no_artifact": 2
      }
    },
    "J": {
      "local-skill": {
        "yes": 3,
        "partial": 3,
        "fix": 1,
        "missing": 0,
        "no_artifact": 0
      },
      "devinwiki": {
        "yes": 4,
        "partial": 1,
        "fix": 2,
        "missing": 0,
        "no_artifact": 0
      },
      "deepwiki-open": {
        "yes": 0,
        "partial": 2,
        "fix": 3,
        "missing": 0,
        "no_artifact": 2
      },
      "openwiki": {
        "yes": 6,
        "partial": 1,
        "fix": 0,
        "missing": 0,
        "no_artifact": 0
      },
      "codewiki": {
        "yes": 4,
        "partial": 1,
        "fix": 0,
        "missing": 0,
        "no_artifact": 2
      }
    }
  },
  "available": {
    "local-skill": 7,
    "devinwiki": 7,
    "deepwiki-open": 5,
    "openwiki": 7,
    "codewiki": 5
  },
  "revisions": [
    {
      "repo": "mhmzdev__figma-flutter-mcp",
      "tool": "local-skill",
      "dimensions": [
        "B",
        "C",
        "D"
      ],
      "from": "fix",
      "to": "partial",
      "caseId": "figma-compact-input",
      "reason": "原文介绍了输入形式和失败返回，但没有说明编号简写在什么情况下会解析失败。因此记为部分说明，不是事实错误。"
    },
    {
      "repo": "mhmzdev__figma-flutter-mcp",
      "tool": "openwiki",
      "dimensions": [
        "B",
        "C",
        "D"
      ],
      "from": "fix",
      "to": "partial",
      "caseId": "figma-compact-input",
      "reason": "按相同口径，列出输入形式不足以证明对任意有效编号组合保证成功；该分支缺陷未说明，记覆盖不足。"
    },
    {
      "repo": "lokesh__lightbox2",
      "tool": "local-skill",
      "dimensions": [
        "E"
      ],
      "from": "fix",
      "to": "partial",
      "caseId": "lightbox-reinit",
      "reason": "不重复创建遮罩层的说明正确。若要理解重复初始化的完整过程，还缺少事件会重复绑定的说明，因此本能力记为部分。"
    },
    {
      "repo": "cpu0x00__Ghost",
      "tool": "codewiki",
      "dimensions": [
        "E"
      ],
      "from": "yes",
      "to": "partial",
      "caseId": "ghost-build-order",
      "reason": "构建顺序没有讲全资源与 C++ 编译先后；从有收紧为部分，不是新增事实错误。"
    }
  ],
  "repositories": [
    {
      "name": "Flask-RESTful",
      "slug": "flask-restful/flask-restful",
      "commit": "88cce53a8cd65830bf1815185a42ba24e5db78c6",
      "tools": {
        "local-skill": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "提供核心函数的语义、签名和流程图，但没有选定函数的连续实现片段；不能把详细解释视为实现上下文。",
              "checkpoint": "选定核心实现为 inputs.boolean、Argument.convert/parse 与 Api.output/make_response、utils.unpack；检查有无带分支/变量的连续实现片段及错误注入，不用HelloWorld等使用例替代。",
              "excerpts": [
                {
                  "label": "3.3-Conversion and Collection Semantics.md:64",
                  "quote": "`convert` first tries the richest callable signature: `type(value, name, operator)`."
                },
                {
                  "label": "5.3-JSON Response Transformer.md:9",
                  "quote": "`output_json(data, code, headers=None)` accepts the same three-part contract produced by Flask-RESTful's return-value normalization."
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:134",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L134"
                },
                {
                  "label": "flask_restful/inputs.py:237",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L237"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "配置层、转换器调用、store/append、JSON签名和返回契约已有；联合清单中的choices=()、RequestParser.trim/bundle_errors默认值等未完整展开。",
              "checkpoint": "联合检查 Argument 的 type/location/choices/action/operators/store_missing/nullable 及 RequestParser 类、trim/bundle_errors 默认值与配置层；检查 parse_args 返回、marshal(data, fields, envelope=None)、representation(data,code,headers=None)及实际调用形状。",
              "excerpts": [
                {
                  "label": "3.3-Conversion and Collection Semantics.md:7",
                  "quote": "Defaults are intentionally permissive: values are converted to text, matching is case-sensitive, null is allowed, missing arguments are stored, the only operator is equality, and the result uses `store` semantics."
                },
                {
                  "label": "3.1-Parser Definitions and Namespace Results.md:87",
                  "quote": "The `store_missing` rule explains why declared but absent arguments normally appear in results: its default on `Argument` is true, and absent values default to `None`."
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:74",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L74"
                },
                {
                  "label": "flask_restful/representations/json.py:7",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/representations/json.py#L7"
                },
                {
                  "label": "flask_restful/__init__.py:622",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L622"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "yes",
              "finding": "boolean四种字符串及原生bool、store首值/append全值、operators顺序、列表与1/2/3元组的unpack规则均与源码相符。",
              "checkpoint": "检查boolean原生bool和true/1、false/0的映射与拒绝范围；store取首个、append收集全部及operators多值；unpack列表保留数据、2/3元组拆分、1元组保留整体。",
              "excerpts": [
                {
                  "label": "3.6-Built-in Input Converters.md:54",
                  "quote": "Other truthy inputs are lowercased and matched against exactly four literals: `true` and `1` produce `True`; `false` and `0` produce `False`."
                },
                {
                  "label": "3.3-Conversion and Collection Semantics.md:127",
                  "quote": "`action='store'` returns the first accepted value."
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/inputs.py:244",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L244"
                },
                {
                  "label": "flask_restful/reqparse.py:254",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L254"
                },
                {
                  "label": "flask_restful/utils/__init__.py:18",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/utils/__init__.py#L18"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "nullable、非法boolean、即时400与聚合自定义状态、406/500区别讲解正确；URL起始锚点这个共同边界没有明确展开。",
              "checkpoint": "检查None与nullable、非法转换的即时400/聚合http_error_code、URL正则起始^仍有效；区分无匹配且无默认的406与不受支持非空默认的500。",
              "excerpts": [
                {
                  "label": "3.3-Conversion and Collection Semantics.md:73",
                  "quote": "A `None` value returns unchanged when `nullable=True`; with `nullable=False`, conversion raises `ValueError` with `Must not be null!`."
                },
                {
                  "label": "3.4-Validation and Error Bundling.md:43",
                  "quote": "The immediate path always aborts with 400 inside the argument handler. The parser's `http_error_code` parameter applies to the final aggregated abort, not to this direct argument-level abort."
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:134",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L134"
                },
                {
                  "label": "flask_restful/inputs.py:17",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L17"
                },
                {
                  "label": "flask_restful/__init__.py:519",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L519"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "装饰器顺序正确；但声称聚合错误会抑制该参数namespace赋值，忽略默认store_missing=True仍会暂存ValueError。最终abort不把该临时值正常返回。",
              "checkpoint": "检查聚合ValueError会清空found但在store_missing=True时可暂存namespace，最终统一abort；检查Resource.as_view先套Api.output、再套API decorators、最后注册URL，图文同口径。",
              "excerpts": [
                {
                  "label": "3.4-Validation and Error Bundling.md:54",
                  "quote": "`parse_args` recognizes the returned `ValueError`, merges the mapping into its local `errors` dictionary, and suppresses namespace assignment for that argument."
                },
                {
                  "label": "2.3-Resource View Construction.md:63",
                  "quote": "After `as_view` returns the Flask view function, `Api.output` wraps it. The API then applies every function in `self.decorators` in list order, replacing `resource_func` after each application."
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:329",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L329"
                },
                {
                  "label": "flask_restful/__init__.py:453",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L453"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "yes",
              "finding": "连接了output/unpack/协商/JSON转换链，也明确Nested改变子对象作用域、List通过容器和marshal递归；未把to_marshallable_type误写成所有marshal的前置步骤。",
              "checkpoint": "检查Api.output→utils.unpack→Api.make_response→representations/json.output_json及数据传递；检查fields.Nested/List调用包级marshal，marshal不统一先调to_marshallable_type。",
              "excerpts": [
                {
                  "label": "5.1-Return Value Normalization.md:38",
                  "quote": "If the result is not already a response, the wrapper calls `unpack`, then calls `self.make_response(data, code, headers=headers)`."
                },
                {
                  "label": "5.3-JSON Response Transformer.md:3",
                  "quote": "Flask-RESTful's default representation is `application/json`, backed by the compact `output_json` function."
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:487",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L487"
                },
                {
                  "label": "flask_restful/representations/json.py:7",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/representations/json.py#L7"
                },
                {
                  "label": "flask_restful/fields.py:152",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/fields.py#L152"
                },
                {
                  "label": "flask_restful/__init__.py:653",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L653"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未发现前缀、显式缺失区、后缀及对应答案封装在一起的补全样本；普通代码和待替换变量不算。",
              "checkpoint": "完整Wiki查找现成prefix+显式hole+suffix+匹配答案的封装任务，不能由可切片源码推定存在。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "yes",
              "finding": "有明确列表输入unpack(['hey',201])及默认状态/headers预期，也有正确boolean文字输入输出对；属于可核对预期，不是实跑记录。",
              "checkpoint": "在同一组boolean/reqparse/unpack/Accept路径中检查至少一个明确输入及预期输出/断言，并核对已给出的关键预期；特别核对operators默认store、int解析bar、1元组和Accept权重示例。文字输入输出对也计入，不要求执行。 另对五工具统一检索历史crypto往返正例并作旁证披露，不用它替代上述核心路径。",
              "excerpts": [
                {
                  "label": "5.1-Return Value Normalization.md:9",
                  "quote": "The unit test expects `unpack(['hey', 201])` to return that list as data with the default status and headers."
                },
                {
                  "label": "3.6-Built-in Input Converters.md:54",
                  "quote": "`true` and `1` produce `True`; `false` and `0` produce `False`."
                }
              ],
              "sources": [
                {
                  "label": "tests/test_api.py:45",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/tests/test_api.py#L45"
                },
                {
                  "label": "flask_restful/inputs.py:250",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L250"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未发现绑定具体示例与执行环境的实际运行记录；源测试、预期结果、运行说明和verified元数据均不充当执行证明。",
              "checkpoint": "完整Wiki查找与具体示例和环境关联的实际执行记录；运行指南、源测试及verified标签不等同实跑。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "受检解析、输入转换、响应及字段递归事实附有明确源码文件/行号标签，可定位；空href不抹去可读file:line信息。",
              "checkpoint": "用Wiki自身源码文件/符号/行号定位上述受检事实；可用路径或明确file:line标签计入，错文件/不存在的Sources指针需修正；不是全页引用率。",
              "excerpts": [
                {
                  "label": "3.3-Conversion and Collection Semantics.md:131",
                  "quote": "- [flask_restful/reqparse.py#L254-259]()"
                },
                {
                  "label": "3.6-Built-in Input Converters.md:56",
                  "quote": "- [flask_restful/inputs.py#L237-254]()"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:254",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L254"
                },
                {
                  "label": "flask_restful/inputs.py:237",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L237"
                },
                {
                  "label": "flask_restful/fields.py:126",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/fields.py#L126"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "devinwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "核心Argument方法只给签名/注释式桩，boolean和协商主要用文字/图；自定义validator或Resource使用例不能替代选定核心实现。",
              "checkpoint": "选定核心实现为 inputs.boolean、Argument.convert/parse 与 Api.output/make_response、utils.unpack；检查有无带分支/变量的连续实现片段及错误注入，不用HelloWorld等使用例替代。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "```python\ndef convert(self, value, op):\n    # Applies type conversion and handles special cases like FileStorage and None\n```"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:134",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L134"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "Argument默认表、operators名、append和representation签名多处正确；但把默认store契约说成取最后值，operators示例也漏设append却给列表结果。",
              "checkpoint": "联合检查 Argument 的 type/location/choices/action/operators/store_missing/nullable 及 RequestParser 类、trim/bundle_errors 默认值与配置层；检查 parse_args 返回、marshal(data, fields, envelope=None)、representation(data,code,headers=None)及实际调用形状。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "- `'store'`: Only the last value is kept (default)"
                },
                {
                  "label": "wiki.json",
                  "quote": "| `type` | callable | `text_type` | Function to convert and validate the argument value |"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:74",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L74"
                },
                {
                  "label": "flask_restful/reqparse.py:257",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L257"
                },
                {
                  "label": "flask_restful/__init__.py:521",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L521"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "fix",
              "finding": "boolean表的true/1与false/0、append全值例正确；store末值和operators默认store却输出两值列表与实现冲突，且未覆盖unpack列表/1元组规则。",
              "checkpoint": "检查boolean原生bool和true/1、false/0的映射与拒绝范围；store取首个、append收集全部及operators多值；unpack列表保留数据、2/3元组拆分、1元组保留整体。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "- `'store'`: Only the last value is kept (default)"
                },
                {
                  "label": "wiki.json",
                  "quote": "    A[\"Request with parameters:\\n?price>=10&price<=50\"] --> B[\"Argument with:\\nname='price'\\noperators=['>=', '<=', '=']\"]\n    B --> C[\"Parsed result:\\nprice = ['10', '50']\"]"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:192",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L192"
                },
                {
                  "label": "flask_restful/reqparse.py:254",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L254"
                },
                {
                  "label": "flask_restful/inputs.py:244",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L244"
                },
                {
                  "label": "flask_restful/utils/__init__.py:18",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/utils/__init__.py#L18"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "有无默认时406、一般400错误、nullable和合法/非法URL例；未明确URL起始锚点、boolean空值边界以及不支持默认的500分支。",
              "checkpoint": "检查None与nullable、非法转换的即时400/聚合http_error_code、URL正则起始^仍有效；区分无匹配且无默认的406与不受支持非空默认的500。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "If content negotiation fails because none of the requested media types are available and no default media type is set, Flask-RESTful returns a `406 Not Acceptable` response."
                },
                {
                  "label": "wiki.json",
                  "quote": "| `url` | Validates a URL | `http://example.com`, `https://www.example.com:8000/test` | `example.com`, `http://`, `foo` |"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:519",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L519"
                },
                {
                  "label": "flask_restful/inputs.py:17",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L17"
                },
                {
                  "label": "flask_restful/reqparse.py:173",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L173"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "partial",
              "finding": "有逐参数解析和注册视图的流程图；未明确临时ValueError入namespace的条件，也未显示Api.output与API decorators的相对顺序。",
              "checkpoint": "检查聚合ValueError会清空found但在store_missing=True时可暂存namespace，最终统一abort；检查Resource.as_view先套Api.output、再套API decorators、最后注册URL，图文同口径。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "    loop For each defined argument\n        Parser->>Argument: parse(request)"
                },
                {
                  "label": "wiki.json",
                  "quote": "    api->>res: Create view function\n    api->>res: Apply decorators\n    api->>flask: app.add_url_rule('/path', view_func=resource_func)"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:329",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L329"
                },
                {
                  "label": "flask_restful/__init__.py:453",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L453"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "图示Field.output及Nested/List用途有帮助，但把to_marshallable_type画成marshal的统一第一步；实际包级marshal直接递归/逐字段output，该helper只由特定fields使用。output→unpack全链也未展开。",
              "checkpoint": "检查Api.output→utils.unpack→Api.make_response→representations/json.output_json及数据传递；检查fields.Nested/List调用包级marshal，marshal不统一先调to_marshallable_type。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "    subgraph \"marshal() function\"\n        A[\"Input Object\"] --> B[\"to_marshallable_type()\"]\n        B --> C[\"Process Each Field\"]\n        C --> D[\"Field.output() for each field\"]"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:650",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L650"
                },
                {
                  "label": "flask_restful/fields.py:275",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/fields.py#L275"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未发现前缀、显式缺失区、后缀及对应答案封装在一起的补全样本；普通代码和待替换变量不算。",
              "checkpoint": "完整Wiki查找现成prefix+显式hole+suffix+匹配答案的封装任务，不能由可切片源码推定存在。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "fix",
              "finding": "确有正确append输入输出与boolean文字对；但operators图明确把未设append的?price>=10&price<=50预测成两值列表，故不能仅选正确例记yes。",
              "checkpoint": "在同一组boolean/reqparse/unpack/Accept路径中检查至少一个明确输入及预期输出/断言，并核对已给出的关键预期；特别核对operators默认store、int解析bar、1元组和Accept权重示例。文字输入输出对也计入，不要求执行。 另对五工具统一检索历史crypto往返正例并作旁证披露，不用它替代上述核心路径。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "    A[\"Request with parameters:\\n?price>=10&price<=50\"] --> B[\"Argument with:\\nname='price'\\noperators=['>=', '<=', '=']\"]\n    B --> C[\"Parsed result:\\nprice = ['10', '50']\"]"
                },
                {
                  "label": "wiki.json",
                  "quote": "# For a request like ?tag=python&tag=web&tag=api\n# args['tag'] would be ['python', 'web', 'api']"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:257",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L257"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未发现绑定具体示例与执行环境的实际运行记录；源测试、预期结果、运行说明和verified元数据均不充当执行证明。",
              "checkpoint": "完整Wiki查找与具体示例和环境关联的实际执行记录；运行指南、源测试及verified标签不等同实跑。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "partial",
              "finding": "Argument和boolean有可定位的file:line；marshal内部过程只指向fields.py的helper/Raw片段，未提供定义marshal的__init__.py指针，受检跨文件链的来源不完整。",
              "checkpoint": "用Wiki自身源码文件/符号/行号定位上述受检事实；可用路径或明确file:line标签计入，错文件/不存在的Sources指针需修正；不是全页引用率。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "Sources: [flask_restful/reqparse.py:51-52](), [flask_restful/reqparse.py:254-258](), [tests/test_reqparse.py:267-323]()"
                },
                {
                  "label": "wiki.json",
                  "quote": "Sources: [flask_restful/fields.py:60-72](), [flask_restful/fields.py:108-123]()"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:254",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L254"
                },
                {
                  "label": "flask_restful/__init__.py:622",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L622"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "deepwiki-open": {
          "available": true,
          "cells": {
            "A": {
              "status": "fix",
              "finding": "有连续make_response/output实现，但boolean被改写为None→False且接受yes/on/no/off，Argument.convert也被简化成错误逻辑；实现上下文需要修正。",
              "checkpoint": "选定核心实现为 inputs.boolean、Argument.convert/parse 与 Api.output/make_response、utils.unpack；检查有无带分支/变量的连续实现片段及错误注入，不用HelloWorld等使用例替代。",
              "excerpts": [
                {
                  "label": "wiki.md:1620",
                  "quote": "def boolean(value):\n    if isinstance(value, bool):\n        return value\n    if value is None:\n        return False\n    if value.lower() in ('true', 'yes', 'on', '1'):\n        return True"
                },
                {
                  "label": "wiki.md:1565",
                  "quote": "def convert(self, value, op):\n    if self.type is None:\n        return value"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/inputs.py:237",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L237"
                },
                {
                  "label": "flask_restful/reqparse.py:134",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L134"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "接口表把type/location/choices默认写成None、operators误写operator、增加不受支持的split；另有正确representation函数片段不能抵消这些接口错误。",
              "checkpoint": "联合检查 Argument 的 type/location/choices/action/operators/store_missing/nullable 及 RequestParser 类、trim/bundle_errors 默认值与配置层；检查 parse_args 返回、marshal(data, fields, envelope=None)、representation(data,code,headers=None)及实际调用形状。",
              "excerpts": [
                {
                  "label": "wiki.md:1519",
                  "quote": "| `type` | callable | `None` | Type conversion function |\n| `location` | str or list | `None` | Request location(s) to search |\n| `choices` | list | `None` | Valid choices for the argument |\n| `action` | str | `'store'` | Action to perform ('store', 'append', 'split') |"
                },
                {
                  "label": "wiki.md:1524",
                  "quote": "| `operator` | callable | `None` | Custom validation operator |"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:74",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L74"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "fix",
              "finding": "正确true/false映射表仍存在，但两处伪boolean实现扩大字面量域并改变None处理；store首值、operators与unpack列表/1元组规则也不完整。",
              "checkpoint": "检查boolean原生bool和true/1、false/0的映射与拒绝范围；store取首个、append收集全部及operators多值；unpack列表保留数据、2/3元组拆分、1元组保留整体。",
              "excerpts": [
                {
                  "label": "wiki.md:1606",
                  "quote": "| `boolean` | Converts string to boolean | `'true'` → `True`, `'false'` → `False` |"
                },
                {
                  "label": "wiki.md:1623",
                  "quote": "    if value is None:\n        return False\n    if value.lower() in ('true', 'yes', 'on', '1'):\n        return True\n    if value.lower() in ('false', 'no', 'off', '0'):\n        return False"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/inputs.py:244",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L244"
                },
                {
                  "label": "flask_restful/reqparse.py:254",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L254"
                },
                {
                  "label": "flask_restful/utils/__init__.py:18",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/utils/__init__.py#L18"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "fix",
              "finding": "同一Wiki把不支持的默认媒体类型同时写成406和500；后者与源码相符。伪boolean实现也把None错误变成功返回，关键失败边界不可靠。",
              "checkpoint": "检查None与nullable、非法转换的即时400/聚合http_error_code、URL正则起始^仍有效；区分无匹配且无默认的406与不受支持非空默认的500。",
              "excerpts": [
                {
                  "label": "wiki.md:242",
                  "quote": "| Invalid default mediatype | Any | `nonexistant/mediatype` | 406 Not Acceptable |"
                },
                {
                  "label": "wiki.md:2249",
                  "quote": "If `default_mediatype` is set to an invalid/unregistered type, the system raises `InternalServerError` (HTTP 500):"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:519",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L519"
                },
                {
                  "label": "tests/test_accept.py:226",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/tests/test_accept.py#L226"
                },
                {
                  "label": "flask_restful/inputs.py:247",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L247"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "partial",
              "finding": "注册图和代码正确显示output再decorators；聚合ValueError的临时namespace写入及最终abort状态没有保留，不能视作完整状态链。",
              "checkpoint": "检查聚合ValueError会清空found但在store_missing=True时可暂存namespace，最终统一abort；检查Resource.as_view先套Api.output、再套API decorators、最后注册URL，图文同口径。",
              "excerpts": [
                {
                  "label": "wiki.md:88",
                  "quote": "    Api->>Resource: as_view(endpoint, *args, **kwargs)\n    Api->>Api: Wrap view with output()\n    Api->>Api: Apply decorators\n    Api->>App: add_url_rule(url, view_func)"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:453",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L453"
                },
                {
                  "label": "flask_restful/reqparse.py:329",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L329"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "partial",
              "finding": "output→unpack→make_response及JSON导入/registry链可核对；Response Marshalling章主要转述representation层，没有Nested/List→包级marshal这条共同链。",
              "checkpoint": "检查Api.output→utils.unpack→Api.make_response→representations/json.output_json及数据传递；检查fields.Nested/List调用包级marshal，marshal不统一先调to_marshallable_type。",
              "excerpts": [
                {
                  "label": "wiki.md:1836",
                  "quote": "        data, code, headers = unpack(resp)\n        return self.make_response(data, code, headers=headers)"
                },
                {
                  "label": "wiki.md:2107",
                  "quote": "The `output_json` function is imported from `flask_restful.representations.json` and handles serializing Python objects to JSON responses."
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:487",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L487"
                },
                {
                  "label": "flask_restful/representations/json.py:7",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/representations/json.py#L7"
                },
                {
                  "label": "flask_restful/fields.py:152",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/fields.py#L152"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未发现前缀、显式缺失区、后缀及对应答案封装在一起的补全样本；普通代码和待替换变量不算。",
              "checkpoint": "完整Wiki查找现成prefix+显式hole+suffix+匹配答案的封装任务，不能由可切片源码推定存在。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "fix",
              "finding": "有完整且正确的Accept权重测试；但type=int接收foo=bar却断言字符串bar的测试错误，媒体协商表也存在错误406预期。",
              "checkpoint": "在同一组boolean/reqparse/unpack/Accept路径中检查至少一个明确输入及预期输出/断言，并核对已给出的关键预期；特别核对operators默认store、int解析bar、1元组和Accept权重示例。文字输入输出对也计入，不要求执行。 另对五工具统一检索历史crypto往返正例并作旁证披露，不用它替代上述核心路径。",
              "excerpts": [
                {
                  "label": "wiki.md:1754",
                  "quote": "    parser.add_argument('foo', type=int, required=True)\n    with self.app.test_request_context('/?foo=bar'):\n        args = parser.parse_args()\n    self.assertEqual(args['foo'], 'bar')"
                },
                {
                  "label": "wiki.md:2655",
                  "quote": "        res = client.get('/', headers=[('Accept', 'application/json; q=0.1, text/plain; q=0.3, text/html; q=0.2')])\n        self.assertEqual(res.status_code, 200)\n        self.assertEqual(res.content_type, 'text/plain')"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:147",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L147"
                },
                {
                  "label": "tests/test_accept.py:187",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/tests/test_accept.py#L187"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未发现绑定具体示例与执行环境的实际运行记录；源测试、预期结果、运行说明和verified元数据均不充当执行证明。",
              "checkpoint": "完整Wiki查找与具体示例和环境关联的实际执行记录；运行指南、源测试及verified标签不等同实跑。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "fix",
              "finding": "多数路径可定位，但RequestParser构造器片段的Sources指向inputs.py:100-110，实际类在reqparse.py；这是错误源码指针而非普通行号缺省。",
              "checkpoint": "用Wiki自身源码文件/符号/行号定位上述受检事实；可用路径或明确file:line标签计入，错文件/不存在的Sources指针需修正；不是全页引用率。",
              "excerpts": [
                {
                  "label": "wiki.md:2402",
                  "quote": "class RequestParser:\n    def __init__(self, argument_class=Argument, namespace_class=Namespace,"
                },
                {
                  "label": "wiki.md:2412",
                  "quote": "Sources: [flask_restful/inputs.py:100-110]()"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/inputs.py:100",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L100"
                },
                {
                  "label": "flask_restful/reqparse.py:280",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L280"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "openwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "fix",
              "finding": "保留了完整unpack/output及make_response逻辑，但make_response的Python块中被插入HTML链接校验注释，破坏了连续实现片段。",
              "checkpoint": "选定核心实现为 inputs.boolean、Argument.convert/parse 与 Api.output/make_response、utils.unpack；检查有无带分支/变量的连续实现片段及错误注入，不用HelloWorld等使用例替代。",
              "excerpts": [
                {
                  "label": "content-negotiation.md:137",
                  "quote": "if mediatype in self.representations:\n<!-- openwiki: broken internal link [data, *args, **kwargs] file \"data, *args, **kwargs\" does not exist. Fix the href or restore the target, then delete this comment. -->\n    resp = self.representations[mediatype](data, *args, **kwargs)"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:521",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L521"
                },
                {
                  "label": "flask_restful/utils/__init__.py:18",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/utils/__init__.py#L18"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "Argument/RequestParser表与marshal签名大体准确；但添加不存在的parser层store_missing，并宣称transformer总收三个位置参数，实际output会将headers作为关键字。",
              "checkpoint": "联合检查 Argument 的 type/location/choices/action/operators/store_missing/nullable 及 RequestParser 类、trim/bundle_errors 默认值与配置层；检查 parse_args 返回、marshal(data, fields, envelope=None)、representation(data,code,headers=None)及实际调用形状。",
              "excerpts": [
                {
                  "label": "request-parsing.md:88",
                  "quote": "- `request_parser`-level or argument-level `store_missing=False` omits the key"
                },
                {
                  "label": "content-negotiation.md:97",
                  "quote": "Every registered transformer receives **three positional arguments** and must\nreturn a Flask `Response` object:"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:280",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L280"
                },
                {
                  "label": "flask_restful/__init__.py:493",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L493"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "fix",
              "finding": "boolean输入输出和unpack代码正确；但同页把一元组(data,)预测为(data,200,{})，源码保留整个一元组作data，应为((data,),200,{})。",
              "checkpoint": "检查boolean原生bool和true/1、false/0的映射与拒绝范围；store取首个、append收集全部及operators多值；unpack列表保留数据、2/3元组拆分、1元组保留整体。",
              "excerpts": [
                {
                  "label": "request-handling.md:197",
                  "quote": "- **1-tuple** `(data,)` → `(data, 200, {})` (the 3-way unpack fails on length 1,"
                },
                {
                  "label": "input-validation.md:133",
                  "quote": "- `\"true\"` and `\"1\"` become `True`; `\"false\"` and `\"0\"` become `False`"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/utils/__init__.py:35",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/utils/__init__.py#L35"
                },
                {
                  "label": "tests/test_api.py:42",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/tests/test_api.py#L42"
                },
                {
                  "label": "flask_restful/inputs.py:244",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L244"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "fix",
              "finding": "正确区分406/500且写明boolean空值错误；但声称url_regex.search意味着不受起始锚定，实际regex以^开始。解析图还把非bundled即时abort错误标成http_error_code。",
              "checkpoint": "检查None与nullable、非法转换的即时400/聚合http_error_code、URL正则起始^仍有效；区分无匹配且无默认的406与不受支持非空默认的500。",
              "excerpts": [
                {
                  "label": "input-validation.md:72",
                  "quote": "Validation uses `url_regex.search(value)`, i.e. the pattern may match anywhere\nin the string rather than being anchored at the start, though the pattern's\ntrailing `$` anchors its end."
                },
                {
                  "label": "request-parsing.md:158",
                  "quote": "    err -- no --> abort[\"flask_restful.abort http_error_code\"]"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/inputs.py:17",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L17"
                },
                {
                  "label": "flask_restful/reqparse.py:173",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L173"
                },
                {
                  "label": "flask_restful/__init__.py:519",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L519"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "partial",
              "finding": "正确给出output先于API decorators，且有found或store_missing写入条件；未说明ValueError聚合时found=None仍可能写入临时namespace。",
              "checkpoint": "检查聚合ValueError会清空found但在store_missing=True时可暂存namespace，最终统一abort；检查Resource.as_view先套Api.output、再套API decorators、最后注册URL，图文同口径。",
              "excerpts": [
                {
                  "label": "request-parsing.md:137",
                  "quote": "3. The result is written under `arg.dest or arg.name` for every argument that\n   was found **or** has `store_missing=True`."
                },
                {
                  "label": "overview.md:79",
                  "quote": "   `self.output(resource.as_view(...))`, applies the `Api`-level `decorators`, and"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:329",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L329"
                },
                {
                  "label": "flask_restful/__init__.py:453",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L453"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "yes",
              "finding": "明确API输出调用utils.unpack再make_response和JSON transformer，也说明Nested/列表经子对象作用域回到marshal；未把普通marshal当作统一to_marshallable_type调用。",
              "checkpoint": "检查Api.output→utils.unpack→Api.make_response→representations/json.output_json及数据传递；检查fields.Nested/List调用包级marshal，marshal不统一先调to_marshallable_type。",
              "excerpts": [
                {
                  "label": "request-handling.md:218",
                  "quote": "        data, code, headers = unpack(resp)\n        return self.make_response(data, code, headers=headers)"
                },
                {
                  "label": "content-negotiation.md:239",
                  "quote": "`flask_restful.representations.json.output_json` is the transformer bound to\n`application/json` by `DEFAULT_REPRESENTATIONS`."
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:487",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L487"
                },
                {
                  "label": "flask_restful/representations/json.py:7",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/representations/json.py#L7"
                },
                {
                  "label": "flask_restful/fields.py:152",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/fields.py#L152"
                },
                {
                  "label": "flask_restful/__init__.py:653",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L653"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未发现前缀、显式缺失区、后缀及对应答案封装在一起的补全样本；普通代码和待替换变量不算。",
              "checkpoint": "完整Wiki查找现成prefix+显式hole+suffix+匹配答案的封装任务，不能由可切片源码推定存在。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "fix",
              "finding": "boolean文字输入输出对正确；合法32字节key/16字节seed下也有正确crypto往返断言。仍因unpack一元组的明确错误预期记fix，不用正例抵消错误。",
              "checkpoint": "在同一组boolean/reqparse/unpack/Accept路径中检查至少一个明确输入及预期输出/断言，并核对已给出的关键预期；特别核对operators默认store、int解析bar、1元组和Accept权重示例。文字输入输出对也计入，不要求执行。 另对五工具统一检索历史crypto往返正例并作旁证披露，不用它替代上述核心路径。",
              "excerpts": [
                {
                  "label": "request-handling.md:197",
                  "quote": "- **1-tuple** `(data,)` → `(data, 200, {})` (the 3-way unpack fails on length 1,"
                },
                {
                  "label": "input-validation.md:133",
                  "quote": "- `\"true\"` and `\"1\"` become `True`; `\"false\"` and `\"0\"` become `False`"
                }
              ],
              "sources": [
                {
                  "label": "tests/test_api.py:42",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/tests/test_api.py#L42"
                },
                {
                  "label": "flask_restful/inputs.py:250",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L250"
                },
                {
                  "label": "flask_restful/utils/crypto.py:21",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/utils/crypto.py#L21"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未发现绑定具体示例与执行环境的实际运行记录；源测试、预期结果、运行说明和verified元数据均不充当执行证明。",
              "checkpoint": "完整Wiki查找与具体示例和环境关联的实际执行记录；运行指南、源测试及verified标签不等同实跑。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "受检材料在Sources元数据及正文给出源码文件/行号，足以找到reqparse、inputs、response及marshal符号；verified仅是生成元数据，不另算运行证据。",
              "checkpoint": "用Wiki自身源码文件/符号/行号定位上述受检事实；可用路径或明确file:line标签计入，错文件/不存在的Sources指针需修正；不是全页引用率。",
              "excerpts": [
                {
                  "label": "request-parsing.md:95",
                  "quote": "constructor accepts (`flask_restful/reqparse.py#L280-L286`):"
                },
                {
                  "label": "request-parsing.md:128",
                  "quote": "(`flask_restful/reqparse.py#L310-L341`) runs every registered argument against a"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/reqparse.py:280",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L280"
                },
                {
                  "label": "flask_restful/reqparse.py:310",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L310"
                },
                {
                  "label": "flask_restful/representations/json.py:7",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/representations/json.py#L7"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "codewiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "只有返回形状片段、应用组合示例及流程图，没有选定boolean/convert/make_response/unpack的连续核心实现。",
              "checkpoint": "选定核心实现为 inputs.boolean、Argument.convert/parse 与 Api.output/make_response、utils.unpack；检查有无带分支/变量的连续实现片段及错误注入，不用HelloWorld等使用例替代。",
              "excerpts": [
                {
                  "label": "overview.md:187",
                  "quote": "```python\nreturn data\nreturn data, status_code\nreturn data, status_code, headers\nreturn flask_response\n```"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/inputs.py:237",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L237"
                },
                {
                  "label": "flask_restful/__init__.py:505",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L505"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "marshal签名、OrderedDict及字段类/实例契约正确；Argument列出策略名但缺type/location/choices/operators等默认值及调用细节，不能用marshal单例覆盖联合清单。",
              "checkpoint": "联合检查 Argument 的 type/location/choices/action/operators/store_missing/nullable 及 RequestParser 类、trim/bundle_errors 默认值与配置层；检查 parse_args 返回、marshal(data, fields, envelope=None)、representation(data,code,headers=None)及实际调用形状。",
              "excerpts": [
                {
                  "label": "overview.md:352",
                  "quote": "`marshal(data, fields, envelope=None)` walks the schema in declaration order\nand produces an `OrderedDict`."
                },
                {
                  "label": "overview.md:270",
                  "quote": "| Multiplicity | `action='store'` or `action='append'` |"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:622",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L622"
                },
                {
                  "label": "flask_restful/reqparse.py:74",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L74"
                },
                {
                  "label": "flask_restful/reqparse.py:280",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L280"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "partial",
              "finding": "列出正确boolean字面量和返回规范化概念，但未明确store首值、operators多值、boolean输入输出映射及unpack列表/一元组边界。",
              "checkpoint": "检查boolean原生bool和true/1、false/0的映射与拒绝范围；store取首个、append收集全部及operators多值；unpack列表保留数据、2/3元组拆分、1元组保留整体。",
              "excerpts": [
                {
                  "label": "overview.md:333",
                  "quote": "- `boolean` accepts native booleans plus case-insensitive `true`, `false`, `1`,\n  and `0` strings."
                },
                {
                  "label": "overview.md:194",
                  "quote": "`utils.unpack` normalizes non-response return values to `(data, code, headers)`."
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/inputs.py:244",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L244"
                },
                {
                  "label": "flask_restful/reqparse.py:254",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L254"
                },
                {
                  "label": "flask_restful/utils/__init__.py:18",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/utils/__init__.py#L18"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "有无默认时406、BUNDLE_ERRORS及最终自定义HTTP错误；缺不支持默认的500、URL起始锚点和nullable/boolean空值具体边界。",
              "checkpoint": "检查None与nullable、非法转换的即时400/聚合http_error_code、URL正则起始^仍有效；区分无匹配且无默认的406与不受支持非空默认的500。",
              "excerpts": [
                {
                  "label": "overview.md:429",
                  "quote": "`Api.make_response` chooses the best registered media type from the request's\n`Accept` header, falling back to `default_mediatype`. If no acceptable type is\navailable and no default is configured, it raises `406 Not Acceptable`."
                },
                {
                  "label": "overview.md:321",
                  "quote": "`parse_args` accepts a custom HTTP error code for the final bundled response."
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:519",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L519"
                },
                {
                  "label": "flask_restful/inputs.py:17",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L17"
                },
                {
                  "label": "flask_restful/reqparse.py:136",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L136"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "文字把API decorators放到Api.output之前，时序图又把output包装放到URL注册之后；源码实际是as_view→output→decorators→URL注册。聚合异常图也未完整表达最终errors abort。",
              "checkpoint": "检查聚合ValueError会清空found但在store_missing=True时可暂存namespace，最终统一abort；检查Resource.as_view先套Api.output、再套API decorators、最后注册URL，图文同口径。",
              "excerpts": [
                {
                  "label": "overview.md:166",
                  "quote": "`_register_view` converts the resource class into a Flask view using\n`Resource.as_view`, adds API-wide decorators, wraps the result with\n`Api.output`, and registers every supplied URL."
                },
                {
                  "label": "overview.md:163",
                  "quote": "    Api->>View: wrap MethodView with output adapter"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:453",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L453"
                },
                {
                  "label": "flask_restful/reqparse.py:329",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L329"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "yes",
              "finding": "明确output/unpack/make_response/JSON registry链，也直接指出Nested/List回调包级marshal的循环依赖；这些受检关系与实现一致。",
              "checkpoint": "检查Api.output→utils.unpack→Api.make_response→representations/json.output_json及数据传递；检查fields.Nested/List调用包级marshal，marshal不统一先调to_marshallable_type。",
              "excerpts": [
                {
                  "label": "overview.md:105",
                  "quote": "- `fields.Nested` and `fields.List` call the package-level `marshal` function\n  to recursively serialize nested structures."
                },
                {
                  "label": "overview.md:194",
                  "quote": "`utils.unpack` normalizes non-response return values to `(data, code, headers)`.\n`Api.output` then delegates to `Api.make_response`, unless the resource already\nreturned a response object."
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/fields.py:10",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/fields.py#L10"
                },
                {
                  "label": "flask_restful/__init__.py:493",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L493"
                },
                {
                  "label": "flask_restful/representations/json.py:7",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/representations/json.py#L7"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未发现前缀、显式缺失区、后缀及对应答案封装在一起的补全样本；普通代码和待替换变量不算。",
              "checkpoint": "完整Wiki查找现成prefix+显式hole+suffix+匹配答案的封装任务，不能由可切片源码推定存在。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "提及测试文件覆盖面和boolean接受范围，但没有选定路径中明确的具体输入+预期结果/断言；返回形状片段与测试建议不能当作完整测试对。",
              "checkpoint": "在同一组boolean/reqparse/unpack/Accept路径中检查至少一个明确输入及预期输出/断言，并核对已给出的关键预期；特别核对operators默认store、int解析bar、1元组和Accept权重示例。文字输入输出对也计入，不要求执行。 另对五工具统一检索历史crypto往返正例并作旁证披露，不用它替代上述核心路径。",
              "excerpts": [
                {
                  "label": "overview.md:611",
                  "quote": "- `test_reqparse.py` covers locations, conversion, defaults, strict mode,\n  parser inheritance, and bundled failures."
                },
                {
                  "label": "overview.md:333",
                  "quote": "- `boolean` accepts native booleans plus case-insensitive `true`, `false`, `1`,\n  and `0` strings."
                }
              ],
              "sources": [
                {
                  "label": "tests/test_api.py:40",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/tests/test_api.py#L40"
                },
                {
                  "label": "tests/test_accept.py:187",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/tests/test_accept.py#L187"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未发现绑定具体示例与执行环境的实际运行记录；源测试、预期结果、运行说明和verified元数据均不充当执行证明。",
              "checkpoint": "完整Wiki查找与具体示例和环境关联的实际执行记录；运行指南、源测试及verified标签不等同实跑。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "唯一Wiki给出可用仓库文件链接，并在相应段落命名解析、marshal、JSON及output符号，可定位本次受检事实；不表示每句都已引用。",
              "checkpoint": "用Wiki自身源码文件/符号/行号定位上述受检事实；可用路径或明确file:line标签计入，错文件/不存在的Sources指针需修正；不是全页引用率。",
              "excerpts": [
                {
                  "label": "overview.md:9",
                  "quote": "The runtime package is centered on [`flask_restful/__init__.py`](../repo/flask_restful/__init__.py),"
                },
                {
                  "label": "overview.md:10",
                  "quote": "with request parsing in [`reqparse.py`](../repo/flask_restful/reqparse.py), output"
                }
              ],
              "sources": [
                {
                  "label": "flask_restful/__init__.py:622",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/__init__.py#L622"
                },
                {
                  "label": "flask_restful/reqparse.py:39",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/reqparse.py#L39"
                },
                {
                  "label": "flask_restful/inputs.py:237",
                  "url": "https://github.com/flask-restful/flask-restful/blob/88cce53a8cd65830bf1815185a42ba24e5db78c6/flask_restful/inputs.py#L237"
                }
              ],
              "correctionCase": null
            }
          }
        }
      }
    },
    {
      "name": "EmailHarvester",
      "slug": "maldevel/EmailHarvester",
      "commit": "934d4121a92ff4f55aa67921e000469aa56b9595",
      "tools": {
        "local-skill": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "共享回调和 process 的逻辑上下文完整，但主要是文字/流程图；未提供所选函数及 dispatch 的连续实际实现片段。",
              "checkpoint": "共享 init_search/process、插件 search 与 CLI dispatch 的连续实现上下文；明确区分源码、抽象模板与新增使用例，检查代码块是否被非 Python 内容污染。",
              "excerpts": [
                {
                  "label": "4.2-Common Search Callback Contract.md:30",
                  "quote": "The adapter calls `init_search(url, domain, limit, counterInit, counterStep, engineName)`. The host clears response buffers and stores the paging threshold, starting position, query template, increment, target word, and progress label. [EmailHarvester.py#L119-127]()\n\nOnly the template and paging profile vary across direct providers. Baidu begins at 0, advances by 10, and labels the phase `Baidu`. [plugins/baidu.py#L28-30]()\n\n### Processing\n\nThe callback next calls `process()`. The host repeatedly formats and retrieves pages while the counter remains below the limit, sleeps one second between successful requests, advances by the configured step, and prints progress. [EmailHarvester.py#L129-154]()\n\n### Extraction\n\nFinally, the callback returns `get_emails()`. The host passes its accumulated response text and target word to the shared parser, which returns a phase-unique address list. [EmailHarvester.py#L156-158]()"
                },
                {
                  "label": "3.3-Pagination and Response Accumulation.md:29",
                  "quote": "`process()` runs while `self.counter < self.limit`. At each iteration it calls `do_search()`, sleeps for one second, increments by `self.step`, and prints the active engine plus the updated counter. [EmailHarvester.py#L149-154]()\n\nBecause the counter advances after a request, the displayed value describes the next boundary rather than an exact count of addresses. A phase starting at 1 with a step of 100 and a limit of 100 performs one request, then reports 101. The loop measures provider paging positions, not successful results."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:119",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L119"
                },
                {
                  "label": "plugins/googles.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L28"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "Focused 使用表仍推荐 -e google，实际仅注册 googles；同一 Wiki 的 provider 章节已说明正确键，不能抵消错误调用。",
              "checkpoint": "CLI 默认 limit=100；search(domain, limit) 返回列表；Google 实际注册键为 googles，-e google 不能调用 Google，all 模式排除 Google 也必须用 googles。",
              "excerpts": [
                {
                  "label": "1.1-Capabilities and Search Coverage.md:49",
                  "quote": "| Focused | `-e google` or another plugin name | One registered search strategy |"
                },
                {
                  "label": "4.3-Provider Query and Paging Profiles.md:47",
                  "quote": "The display label passed to `init_search` is used in progress messages and may differ from the CLI registry key. The Google adapter, for example, displays `Google` but registers as `googles`. [plugins/googles.py#L28-40]() Code that selects a plugin must use the registration key; code that reports progress uses the active-engine label."
                }
              ],
              "sources": [
                {
                  "label": "plugins/googles.py:39",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L39"
                },
                {
                  "label": "EmailHarvester.py:280",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L280"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "yes",
              "finding": "明确区分分页计数阈值与实际结果数，并说明阶段/全局 exact-string set 去重及顺序不保留。",
              "checkpoint": "counter<limit 控制分页阈值，start/step 决定请求次数；响应解码后累加 totalresults；阶段与全局去重均为精确字符串 set 去重，不保证顺序。",
              "excerpts": [
                {
                  "label": "3.3-Pagination and Response Accumulation.md:29",
                  "quote": "`process()` runs while `self.counter < self.limit`. At each iteration it calls `do_search()`, sleeps for one second, increments by `self.step`, and prints the active engine plus the updated counter. [EmailHarvester.py#L149-154]()\n\nBecause the counter advances after a request, the displayed value describes the next boundary rather than an exact count of addresses. A phase starting at 1 with a step of 100 and a limit of 100 performs one request, then reports 101. The loop measures provider paging positions, not successful results."
                },
                {
                  "label": "3.5-Deduplication Boundaries.md:3",
                  "quote": "EmailHarvester removes duplicates at two distinct levels. The parser removes repeated matches from one accumulated provider phase, while the main routine removes overlap across every plugin selected for the command. Both operations use Python sets and return lists, so they establish uniqueness but do not preserve discovery order.\n\n## Phase-Local Uniqueness\n\n### Parser state and matching\n\nA single `myparser` instance is created by the `EmailHarvester` host. Its `extract(results, word)` method stores the accumulated response text and target domain word. `emails()` then cleans the text, compiles a domain-oriented regular expression, and assigns every match to `self.temp`. [EmailHarvester.py#L59-84]() The input normally represents all pages retrieved during one call to `init_search` and `process`.\n\nAfter matching, `emails()` calls the parser's `unique()` method. That method converts `self.temp` to a set and back to a list, returning only one instance of each exact matched string. [EmailHarvester.py#L75-88]() Case variants or differently spelled addresses remain distinct because there is no lowercasing or canonicalization."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:143",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L143"
                },
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                },
                {
                  "label": "EmailHarvester.py:86",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L86"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "yes",
              "finding": "共享请求异常直接 exit(4)，无 timeout、重试或 HTTP 状态自动检查；这些限制没有被泛化为自动恢复能力。",
              "checkpoint": "未注册引擎退出 3；共享请求异常退出 4 并终止整轮；没有 timeout、retry/backoff 或按 HTTP 状态自动恢复的保证。",
              "excerpts": [
                {
                  "label": "3.2-HTTP Retrieval and Proxy Routing.md:75",
                  "quote": "URL formatting, header construction, proxy mapping, and `requests.get` are wrapped in a broad `try/except Exception`. If any operation in that block fails, the exception is printed and the process exits with status 4. [EmailHarvester.py#L129-141]()\n\nThere is no local retry, exponential backoff, timeout parameter, fallback provider, or partial-result continuation. A single request exception terminates the whole command, including an all-plugin run. The code also does not call `raise_for_status()`; an HTTP error response can therefore be decoded and accumulated if Requests returns it normally."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:129",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L129"
                },
                {
                  "label": "EmailHarvester.py:280",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L280"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "yes",
              "finding": "说明请求、睡眠、计数的实际顺序，并保留先解析/收集阶段结果、再 init_search 重置进入下一阶段的顺序。",
              "checkpoint": "每次 init_search 清空阶段缓冲；共享循环按 request→sleep(1)→counter+=step；完成整个阶段后解析，再进入下一阶段/插件，插件顺序执行。",
              "excerpts": [
                {
                  "label": "3.3-Pagination and Response Accumulation.md:29",
                  "quote": "`process()` runs while `self.counter < self.limit`. At each iteration it calls `do_search()`, sleeps for one second, increments by `self.step`, and prints the active engine plus the updated counter. [EmailHarvester.py#L149-154]()\n\nBecause the counter advances after a request, the displayed value describes the next boundary rather than an exact count of addresses. A phase starting at 1 with a step of 100 and a limit of 100 performs one request, then reports 101. The loop measures provider paging positions, not successful results."
                },
                {
                  "label": "5.3-Provider Phase Aggregation.md:40",
                  "quote": "### Extraction before reconfiguration\n\nThe plugin calls `get_emails()` before moving to the next `init_search`. The returned phase list is appended to the local aggregate, preserving extracted strings even though the host buffers are about to be reset.\n\n```mermaid"
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:119",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L119"
                },
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                },
                {
                  "label": "plugins/github.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/github.py#L28"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "yes",
              "finding": "描述插件回调经共享 host 取回整阶段响应，再交给 parser 的真实数据流；没有把阶段解析提前到每次请求。",
              "checkpoint": "EmailHarvester.py 的 eager loader 调用插件 Plugin 并注册回调，CLI dispatch→plugins/*.py search→共享 host 获取/累积响应→get_emails→myparser；不能误写成每页解析/去重。",
              "excerpts": [
                {
                  "label": "4.2-Common Search Callback Contract.md:30",
                  "quote": "The adapter calls `init_search(url, domain, limit, counterInit, counterStep, engineName)`. The host clears response buffers and stores the paging threshold, starting position, query template, increment, target word, and progress label. [EmailHarvester.py#L119-127]()\n\nOnly the template and paging profile vary across direct providers. Baidu begins at 0, advances by 10, and labels the phase `Baidu`. [plugins/baidu.py#L28-30]()\n\n### Processing\n\nThe callback next calls `process()`. The host repeatedly formats and retrieves pages while the counter remains below the limit, sleeps one second between successful requests, advances by the configured step, and prints progress. [EmailHarvester.py#L129-154]()\n\n### Extraction\n\nFinally, the callback returns `get_emails()`. The host passes its accumulated response text and target word to the shared parser, which returns a phase-unique address list. [EmailHarvester.py#L156-158]()"
                },
                {
                  "label": "3.2-HTTP Retrieval and Proxy Routing.md:67",
                  "quote": "The decoded page is appended to `self.totalresults`, preserving all bodies retrieved during the provider phase. Parsing happens later: `process()` repeats requests until the configured limit is reached, and `get_emails()` hands the combined text to `myparser`. [EmailHarvester.py#L146-158]()\n\nAn encoding mismatch can still raise during `decode`. That operation sits outside the request exception block, so decoding errors do not receive the same explicit exit-status handling as failures raised while constructing or sending the request."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:94",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L94"
                },
                {
                  "label": "EmailHarvester.py:110",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L110"
                },
                {
                  "label": "plugins/googles.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L28"
                },
                {
                  "label": "EmailHarvester.py:156",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L156"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到原生打包的 prefix、显式缺口、suffix 与匹配答案；现有源码/示例不能直接等同补全题。",
              "checkpoint": "完整原始 Wiki 内是否已有同一个对象中的 prefix、显式待补全区域、suffix、参考答案；仅能从源码二次切片不算。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "yes",
              "finding": "给出具体分页输入 start=1、step=100、limit=100，并明确预期为一次请求、报告101；这是未执行但可核对的精确输入/结果对。",
              "checkpoint": "CLI 或分页的具体输入与明确预期输出/失败结果成对出现；检查 google 调用/排除与 start、step、limit 的预期，不把测试建议当作已成型样例。",
              "excerpts": [
                {
                  "label": "3.3-Pagination and Response Accumulation.md:29",
                  "quote": "`process()` runs while `self.counter < self.limit`. At each iteration it calls `do_search()`, sleeps for one second, increments by `self.step`, and prints the active engine plus the updated counter. [EmailHarvester.py#L149-154]()\n\nBecause the counter advances after a request, the displayed value describes the next boundary rather than an exact count of addresses. A phase starting at 1 with a step of 100 and a limit of 100 performs one request, then reports 101. The loop measures provider paging positions, not successful results."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到与具体样例及执行上下文绑定的实际运行记录；使用说明、样例输出和生成验证元数据不等于已执行。",
              "checkpoint": "具体 CLI/分页样例的实际执行结果及上下文记录；仅命令、示意输出、源码断言、生成时间/verified 元数据不算。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "所检共享循环、HTTP边界和真实 Google key 都有可用源码文件/行标签；空链接目标不抹掉这些定位信息。",
              "checkpoint": "所检事实能否通过 Wiki 自带的文件、符号或行号指针追到固定源码；空 href 但可用文件/行标签仍可追溯，引用不存在的 plugins/google.py 则需修正。",
              "excerpts": [
                {
                  "label": "3.3-Pagination and Response Accumulation.md:29",
                  "quote": "`process()` runs while `self.counter < self.limit`. At each iteration it calls `do_search()`, sleeps for one second, increments by `self.step`, and prints the active engine plus the updated counter. [EmailHarvester.py#L149-154]()\n\nBecause the counter advances after a request, the displayed value describes the next boundary rather than an exact count of addresses. A phase starting at 1 with a step of 100 and a limit of 100 performs one request, then reports 101. The loop measures provider paging positions, not successful results."
                },
                {
                  "label": "4.3-Provider Query and Paging Profiles.md:47",
                  "quote": "The display label passed to `init_search` is used in progress messages and may differ from the CLI registry key. The Google adapter, for example, displays `Google` but registers as `googles`. [plugins/googles.py#L28-40]() Code that selects a plugin must use the registration key; code that reports progress uses the active-engine label."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                },
                {
                  "label": "plugins/googles.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L28"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "devinwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "yes",
              "finding": "提供实际 process 连续函数体，包含循环条件、request、sleep、计数与输出；不是以独立使用例替代实现。",
              "checkpoint": "共享 init_search/process、插件 search 与 CLI dispatch 的连续实现上下文；明确区分源码、抽象模板与新增使用例，检查代码块是否被非 Python 内容污染。",
              "excerpts": [
                {
                  "label": "wiki.json:346",
                  "quote": "def process(self):\n    while (self.counter < self.limit):\n        self.do_search()           # HTTP GET request\n        time.sleep(1)              # Rate limiting\n        self.counter += self.step  # Increment pagination\n        print(green(\"[+] Searching in {}:\".format(self.activeEngine)) + \n              cyan(\" {} results\".format(str(self.counter))))\n```"
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "命令章明确声称 -e google 选中名为 google 的注册项；实际 registry 是 googles。Google 专章的正确名称仍保留但不抵消该错。",
              "checkpoint": "CLI 默认 limit=100；search(domain, limit) 返回列表；Google 实际注册键为 googles，-e google 不能调用 Google，all 模式排除 Google 也必须用 googles。",
              "excerpts": [
                {
                  "label": "wiki.json:253",
                  "quote": "python3 EmailHarvester.py -d example.com -e google\n```\n\nThis invokes the Google plugin to search for emails at `example.com`. The `-e google` argument selects the plugin registered under the name `\"google\"` in the plugin registry."
                },
                {
                  "label": "wiki.json:25",
                  "quote": "\n**Plugin Registration:**\n- **Plugin name:** `'googles'` [plugins/googles.py:39]()\n- **Registered function:** `search(domain, limit)` [plugins/googles.py:28-32]()\n- **Module global reference:** `app_emailharvester` [plugins/googles.py:25]()"
                }
              ],
              "sources": [
                {
                  "label": "plugins/googles.py:39",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L39"
                },
                {
                  "label": "EmailHarvester.py:280",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L280"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "partial",
              "finding": "正确给出 set 去重实现和计数循环，但未补齐精确字符串/不保留顺序以及 limit 不是实际返回结果数的关键限定。",
              "checkpoint": "counter<limit 控制分页阈值，start/step 决定请求次数；响应解码后累加 totalresults；阶段与全局去重均为精确字符串 set 去重，不保证顺序。",
              "excerpts": [
                {
                  "label": "wiki.json:235",
                  "quote": "### Stage 4: Deduplication\n\nThe `unique()` method [EmailHarvester.py:86-88]() removes duplicate email addresses using Python's `set` data structure:\n\n```python\ndef unique(self):\n    self.new = list(set(self.temp))\n    return self.new\n```\n\n**Deduplication Process:**\n\n1. Convert `self.temp` (list of email matches) to a `set`, which automatically removes duplicates\n2. Convert the `set` back to a `list` to maintain a consistent return type\n3. Store the result in `self.new` and return it\n\nThis approach ensures that if the same email address appears multiple times across different search result pages, it is only included once in the final output."
                },
                {
                  "label": "wiki.json:346",
                  "quote": "def process(self):\n    while (self.counter < self.limit):\n        self.do_search()           # HTTP GET request\n        time.sleep(1)              # Rate limiting\n        self.counter += self.step  # Increment pagination\n        print(green(\"[+] Searching in {}:\".format(self.activeEngine)) + \n              cyan(\" {} results\".format(str(self.counter))))\n```"
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:86",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L86"
                },
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "fix",
              "finding": "Yahoo 专章宣称共享核心有 retry logic，实际 request 异常直接退出4；不能用其它章节的错误处理描述抵消不存在的重试保证。",
              "checkpoint": "未注册引擎退出 3；共享请求异常退出 4 并终止整轮；没有 timeout、retry/backoff 或按 HTTP 状态自动恢复的保证。",
              "excerpts": [
                {
                  "label": "wiki.json:297",
                  "quote": "The core application handles:\n- HTTP request execution with proper headers and proxy configuration\n- User-agent rotation (if configured)\n- HTML response parsing via `myparser`\n- Email deduplication across multiple pages\n- Error handling and retry logic\n\nSources: [plugins/yahoo.py:28-32]()"
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:129",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L129"
                },
                {
                  "label": "EmailHarvester.py:138",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L138"
                },
                {
                  "label": "plugins/yahoo.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/yahoo.py#L28"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "Bing 流程图写成请求→递增→sleep，实际是请求→sleep→递增；Yahoo 图还将解析提前到页循环内。正确 process 代码仍作为正例保留。",
              "checkpoint": "每次 init_search 清空阶段缓冲；共享循环按 request→sleep(1)→counter+=step；完成整个阶段后解析，再进入下一阶段/插件，插件顺序执行。",
              "excerpts": [
                {
                  "label": "wiki.json:178",
                  "quote": "    Process[\"app_emailharvester.process()<br/>Loop: while counter < limit<br/>- do_search() - HTTP GET<br/>- Increment counter by 50<br/>- Sleep 1 second\"]"
                },
                {
                  "label": "wiki.json:280",
                  "quote": "    loop For each page (while counter < limit)\n        Core->>Core: Substitute {word} and {counter}\n        Core->>Yahoo: HTTP GET request\n        Yahoo-->>Core: HTML response\n        Core->>Parser: Extract emails from HTML\n        Parser-->>Core: Email list\n        Core->>Core: Deduplicate and accumulate\n        Core->>Core: Increment counter by 100\n    end\n    \n    Plugin->>Core: get_emails()\n    Core-->>Plugin: Return complete email list"
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                },
                {
                  "label": "plugins/yahoo.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/yahoo.py#L28"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "Yahoo 图让核心每页调用 parser 并累积去重后的邮件；真实链路在页循环中只累积解码 HTML，循环结束后才 get_emails/解析。",
              "checkpoint": "EmailHarvester.py 的 eager loader 调用插件 Plugin 并注册回调，CLI dispatch→plugins/*.py search→共享 host 获取/累积响应→get_emails→myparser；不能误写成每页解析/去重。",
              "excerpts": [
                {
                  "label": "wiki.json:280",
                  "quote": "    loop For each page (while counter < limit)\n        Core->>Core: Substitute {word} and {counter}\n        Core->>Yahoo: HTTP GET request\n        Yahoo-->>Core: HTML response\n        Core->>Parser: Extract emails from HTML\n        Parser-->>Core: Email list\n        Core->>Core: Deduplicate and accumulate\n        Core->>Core: Increment counter by 100\n    end\n    \n    Plugin->>Core: get_emails()\n    Core-->>Plugin: Return complete email list"
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:147",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L147"
                },
                {
                  "label": "EmailHarvester.py:156",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L156"
                },
                {
                  "label": "plugins/yahoo.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/yahoo.py#L28"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到原生打包的 prefix、显式缺口、suffix 与匹配答案；现有源码/示例不能直接等同补全题。",
              "checkpoint": "完整原始 Wiki 内是否已有同一个对象中的 prefix、显式待补全区域、suffix、参考答案；仅能从源码二次切片不算。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "fix",
              "finding": "First Run Verification把 -e google -l 10 与“邮件结果或No emails found”配对；正确预期是未知插件错误并退出3。",
              "checkpoint": "CLI 或分页的具体输入与明确预期输出/失败结果成对出现；检查 google 调用/排除与 start、step、limit 的预期，不把测试建议当作已成型样例。",
              "excerpts": [
                {
                  "label": "wiki.json:297",
                  "quote": "| Step | Command | Expected Result |\n|------|---------|-----------------|\n| 1. Help Display | `./EmailHarvester.py -h` | ASCII banner + argument list |\n| 2. Plugin List | `./EmailHarvester.py -p` | List of available plugins |\n| 3. Simple Search | `./EmailHarvester.py -d example.com -e google -l 10` | Email results or \"No emails found\" |"
                }
              ],
              "sources": [
                {
                  "label": "plugins/googles.py:39",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L39"
                },
                {
                  "label": "EmailHarvester.py:280",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L280"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到与具体样例及执行上下文绑定的实际运行记录；使用说明、样例输出和生成验证元数据不等于已执行。",
              "checkpoint": "具体 CLI/分页样例的实际执行结果及上下文记录；仅命令、示意输出、源码断言、生成时间/verified 元数据不算。",
              "excerpts": [
                {
                  "label": "wiki.json:303",
                  "quote": "### Sample Output Structure\n\nWhen executing a successful search, terminal output follows this pattern:"
                }
              ],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "fix",
              "finding": "Getting Started 将所检 Google 调用追到不存在的 plugins/google.py；正确的 process 行号引用仍有用，但不能修复该虚构路径。",
              "checkpoint": "所检事实能否通过 Wiki 自带的文件、符号或行号指针追到固定源码；空 href 但可用文件/行标签仍可追溯，引用不存在的 plugins/google.py 则需修正。",
              "excerpts": [
                {
                  "label": "wiki.json:171",
                  "quote": "```\n\nThis executes the `search()` function from [plugins/google.py]() or [plugins/bing.py](), which constructs search URLs with the pattern `@example.com` and retrieves results up to the specified limit.\n"
                },
                {
                  "label": "wiki.json:346",
                  "quote": "def process(self):\n    while (self.counter < self.limit):\n        self.do_search()           # HTTP GET request\n        time.sleep(1)              # Rate limiting\n        self.counter += self.step  # Increment pagination\n        print(green(\"[+] Searching in {}:\".format(self.activeEngine)) + \n              cyan(\" {} results\".format(str(self.counter))))\n```"
                }
              ],
              "sources": [
                {
                  "label": "plugins/googles.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L28"
                },
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "deepwiki-open": {
          "available": false,
          "cells": {
            "A": {
              "status": "no_artifact",
              "finding": "本轮 DeepWiki Open 未生成 EmailHarvester 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "共享 init_search/process、插件 search 与 CLI dispatch 的连续实现上下文；明确区分源码、抽象模板与新增使用例，检查代码块是否被非 Python 内容污染。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "B": {
              "status": "no_artifact",
              "finding": "本轮 DeepWiki Open 未生成 EmailHarvester 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "CLI 默认 limit=100；search(domain, limit) 返回列表；Google 实际注册键为 googles，-e google 不能调用 Google，all 模式排除 Google 也必须用 googles。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "C": {
              "status": "no_artifact",
              "finding": "本轮 DeepWiki Open 未生成 EmailHarvester 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "counter<limit 控制分页阈值，start/step 决定请求次数；响应解码后累加 totalresults；阶段与全局去重均为精确字符串 set 去重，不保证顺序。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "D": {
              "status": "no_artifact",
              "finding": "本轮 DeepWiki Open 未生成 EmailHarvester 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "未注册引擎退出 3；共享请求异常退出 4 并终止整轮；没有 timeout、retry/backoff 或按 HTTP 状态自动恢复的保证。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "E": {
              "status": "no_artifact",
              "finding": "本轮 DeepWiki Open 未生成 EmailHarvester 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "每次 init_search 清空阶段缓冲；共享循环按 request→sleep(1)→counter+=step；完成整个阶段后解析，再进入下一阶段/插件，插件顺序执行。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "F": {
              "status": "no_artifact",
              "finding": "本轮 DeepWiki Open 未生成 EmailHarvester 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "EmailHarvester.py 的 eager loader 调用插件 Plugin 并注册回调，CLI dispatch→plugins/*.py search→共享 host 获取/累积响应→get_emails→myparser；不能误写成每页解析/去重。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "G": {
              "status": "no_artifact",
              "finding": "本轮 DeepWiki Open 未生成 EmailHarvester 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "完整原始 Wiki 内是否已有同一个对象中的 prefix、显式待补全区域、suffix、参考答案；仅能从源码二次切片不算。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "no_artifact",
              "finding": "本轮 DeepWiki Open 未生成 EmailHarvester 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "CLI 或分页的具体输入与明确预期输出/失败结果成对出现；检查 google 调用/排除与 start、step、limit 的预期，不把测试建议当作已成型样例。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "I": {
              "status": "no_artifact",
              "finding": "本轮 DeepWiki Open 未生成 EmailHarvester 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "具体 CLI/分页样例的实际执行结果及上下文记录；仅命令、示意输出、源码断言、生成时间/verified 元数据不算。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "no_artifact",
              "finding": "本轮 DeepWiki Open 未生成 EmailHarvester 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "所检事实能否通过 Wiki 自带的文件、符号或行号指针追到固定源码；空 href 但可用文件/行标签仍可追溯，引用不存在的 plugins/google.py 则需修正。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            }
          }
        },
        "openwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "fix",
              "finding": "真实 googles.search 片段可用，但 CLI dispatch 的 Python 块内被插入 HTML broken-link 注释，照抄后不再是有效 Python；不能只选正确片段。",
              "checkpoint": "共享 init_search/process、插件 search 与 CLI dispatch 的连续实现上下文；明确区分源码、抽象模板与新增使用例，检查代码块是否被非 Python 内容污染。",
              "excerpts": [
                {
                  "label": "end-to-end-search.md:61",
                  "quote": "```python\nif engine == \"all\":\n    print(green(\"[+] Searching everywhere\"))\n    for search_engine in plugins:\n        if search_engine not in excluded:\n<!-- openwiki: broken internal link [domain, limit] file \"domain, limit\" does not exist. Fix the href or restore the target, then delete this comment. -->\n            all_emails += plugins[search_engine]['search'](domain, limit)\n```"
                },
                {
                  "label": "plugin-system.md:67",
                  "quote": "app_emailharvester = None\n\ndef search(domain, limit):\n    url = 'https://www.google.com/search?num=100&start={counter}&hl=en&q=\"%40{word}\"'\n    app_emailharvester.init_search(url, domain, limit, 0, 100, 'Google')\n    app_emailharvester.process()\n    return app_emailharvester.get_emails()\n\nclass Plugin:\n    def __init__(self, app, conf):\n        global app_emailharvester, config\n        #config = conf\n        app.register_plugin('googles', {'search': search})\n        app_emailharvester = app"
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:275",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L275"
                },
                {
                  "label": "plugins/googles.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L28"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "Quickstart推荐 -e google；workflow还声称 -r google,twitter 会排除Google。Plugin System虽明确写googles，但两处旧例均与真实键矛盾。",
              "checkpoint": "CLI 默认 limit=100；search(domain, limit) 返回列表；Google 实际注册键为 googles，-e google 不能调用 Google，all 模式排除 Google 也必须用 googles。",
              "excerpts": [
                {
                  "label": "quickstart.md:54",
                  "quote": "\n```bash\n./EmailHarvester.py -d example.com -e google\n```"
                },
                {
                  "label": "end-to-end-search.md:70",
                  "quote": "The `--exclude` list is parsed earlier by splitting `args.exclude` on commas (an empty `[]` when not given), and each plugin whose key appears in that list is skipped. Because a `site` source like `twitter.py` is just another top-level plugin key, exclusion works uniformly across both single-engine and site-scoped plugins — for example `-r google,twitter` skips both the Google engine and the multi-engine Twitter source. Each plugin's `search()` runs synchronously in sequence, so an `all` run issues its requests one engine at a time, not in parallel."
                }
              ],
              "sources": [
                {
                  "label": "plugins/googles.py:39",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L39"
                },
                {
                  "label": "EmailHarvester.py:275",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L275"
                },
                {
                  "label": "EmailHarvester.py:280",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L280"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "partial",
              "finding": "正确描述阶段响应累积、counter阈值和精确set去重；缺少去重顺序不保留及limit/step导致计数越过阈值的明确结果边界。",
              "checkpoint": "counter<limit 控制分页阈值，start/step 决定请求次数；响应解码后累加 totalresults；阶段与全局去重均为精确字符串 set 去重，不保证顺序。",
              "excerpts": [
                {
                  "label": "result-extraction.md:25",
                  "quote": "1. **`init_search(url, word, limit, counterInit, counterStep, engineName)`** resets the accumulated buffers at the start of a plugin's query series: it sets `self.results = \"\"` and `self.totalresults = \"\"`, and records the URL template, the target domain (`word`), the result limit, the starting counter, the per-request step, and a human-readable engine label.\n\n2. **`do_search()`** performs a single HTTP request. It formats the stored URL template with the current `counter` and `word`, builds a `User-Agent` header (and a proxy dict when configured), issues `requests.get`, decodes the response body into `self.results`, and then **appends** that body to the running total with `self.totalresults += self.results`.\n\n3. **`process()`** orchestrates pagination: it loops `while (self.counter < self.limit)`, calling `do_search()` once per iteration, sleeping 1 second between requests, and advancing the counter by `step` each time. Because `do_search` *appends*, `self.totalresults` grows monotonically with every page fetched; the counter steps determined by the plugin (e.g. Bing uses `step 50`, most Google-based queries use `step 100`) control how many pages get folded in.\n\n4. **`get_emails()`** hands the *complete* accumulated string to the parser: `self.parser.extract(self.totalresults, self.word)`, then returns `self.parser.emails()`.\n\nThe key invariant is that `totalresults` is the single source of truth handed to the parser — it is the concatenation of all decoded responses across one plugin's full paginated run, so extraction and dedup operate on the combined corpus rather than per page.\n\nBecause plugins may drive `init_search`/`process`/`get_emails` multiple times (each site-scoped plugin runs a separate pass per upstream engine), each pass resets `totalresults` and produces its own deduplicated list, which the CLI later merges across all selected plugins."
                },
                {
                  "label": "result-extraction.md:65",
                  "quote": "`unique()` converts `self.temp` (a list of every regex hit, which can contain duplicates when the same address appears on multiple pages or under different sanitized forms) into a `set` — a deduplication by hash equality — and then back to a list. The `set` conversion is the dedup mechanism: identical address strings collapse to one element.\n\nTwo distinct dedup layers exist in the tool, at different scopes:\n\n- **`myparser.unique()`** (the method above) dedups within a single plugin's accumulated results, inside `emails()`.\n- **The module-level `unique(data)` function** (`list(set(data))`) dedups again across all selected plugins, in the CLI's `__main__` after concatenating every engine's `search()` result. This second pass removes cross-engine duplicates, so an address found by both Bing and Google appears only once in the final output."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:119",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L119"
                },
                {
                  "label": "EmailHarvester.py:143",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L143"
                },
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                },
                {
                  "label": "EmailHarvester.py:86",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L86"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "给出未知引擎exit3、请求异常exit4和完整轮次终止，但没有说明共享HTTP无timeout/retry/status检查等重要限制。",
              "checkpoint": "未注册引擎退出 3；共享请求异常退出 4 并终止整轮；没有 timeout、retry/backoff 或按 HTTP 状态自动恢复的保证。",
              "excerpts": [
                {
                  "label": "end-to-end-search.md:99",
                  "quote": "3. **Proxy handling:** when a proxy is set, `do_search` builds a per-scheme mapping `{self.proxy.scheme: \"http://\" + self.proxy.netloc}` and passes it as `proxies=` to `requests.get`. The scheme and netloc come from the `ParseResult` that `checkProxyUrl` validated and returned, so an `-x http://127.0.0.1:8080` becomes `{'http': 'http://127.0.0.1:8080'}`. Without a proxy, `requests.get(urly, headers=headers)` is called directly.\n4. Any `Exception` from the request is printed and triggers `sys.exit(4)` — this is the transport-failure exit, before any extraction.\n5. **UTF-8 encoding fallback:** after the response arrives, `do_search` checks `if r.encoding is None`, setting it to `'UTF-8'` when the server did not declare an encoding, then decodes the body with `self.results = r.content.decode(r.encoding)` and appends it to the running total (`self.totalresults += self.results`).\n\n`process()` then sleeps `time.sleep(1)` before advancing the counter by the plugin's step. This one-second sleep between pages is the rate limiter that keeps requests to any single engine spaced apart; because plugins run sequentially, `-e all` inherits this pacing across the whole run. The step (e.g. 100 for Google-based queries, 50 for Bing) and starting counter are chosen per plugin via `init_search` and control how many pages are fetched before the counter reaches the limit."
                },
                {
                  "label": "plugin-system.md:138",
                  "quote": "- `-e all` iterates `plugins` (the dict from `get_plugins()`), skips any key present in the `--exclude` comma-split list, and concatenates each plugin's `search(domain, limit)` result.\n- `-e <name>` looks up `plugins[name]`; if the key is absent, it prints an error and exits with code 3.\n- After all plugins run, the flattened results are deduplicated.\n\nBecause each `search()` is synchronous and shares one `EmailHarvester` instance, the core's `process()` sleeps 1 second between paged requests and exits with code 4 on any `requests.get` exception. Warming up many engines with `-e all` therefore issues sequential, rate-limited requests."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:129",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L129"
                },
                {
                  "label": "EmailHarvester.py:280",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L280"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "yes",
              "finding": "明确先重置阶段buffer，按请求→sleep→递增执行，同步插件在整阶段结束后才取邮件；所检顺序正确。",
              "checkpoint": "每次 init_search 清空阶段缓冲；共享循环按 request→sleep(1)→counter+=step；完成整个阶段后解析，再进入下一阶段/插件，插件顺序执行。",
              "excerpts": [
                {
                  "label": "result-extraction.md:25",
                  "quote": "1. **`init_search(url, word, limit, counterInit, counterStep, engineName)`** resets the accumulated buffers at the start of a plugin's query series: it sets `self.results = \"\"` and `self.totalresults = \"\"`, and records the URL template, the target domain (`word`), the result limit, the starting counter, the per-request step, and a human-readable engine label.\n\n2. **`do_search()`** performs a single HTTP request. It formats the stored URL template with the current `counter` and `word`, builds a `User-Agent` header (and a proxy dict when configured), issues `requests.get`, decodes the response body into `self.results`, and then **appends** that body to the running total with `self.totalresults += self.results`.\n\n3. **`process()`** orchestrates pagination: it loops `while (self.counter < self.limit)`, calling `do_search()` once per iteration, sleeping 1 second between requests, and advancing the counter by `step` each time. Because `do_search` *appends*, `self.totalresults` grows monotonically with every page fetched; the counter steps determined by the plugin (e.g. Bing uses `step 50`, most Google-based queries use `step 100`) control how many pages get folded in.\n\n4. **`get_emails()`** hands the *complete* accumulated string to the parser: `self.parser.extract(self.totalresults, self.word)`, then returns `self.parser.emails()`.\n\nThe key invariant is that `totalresults` is the single source of truth handed to the parser — it is the concatenation of all decoded responses across one plugin's full paginated run, so extraction and dedup operate on the combined corpus rather than per page.\n\nBecause plugins may drive `init_search`/`process`/`get_emails` multiple times (each site-scoped plugin runs a separate pass per upstream engine), each pass resets `totalresults` and produces its own deduplicated list, which the CLI later merges across all selected plugins."
                },
                {
                  "label": "end-to-end-search.md:99",
                  "quote": "3. **Proxy handling:** when a proxy is set, `do_search` builds a per-scheme mapping `{self.proxy.scheme: \"http://\" + self.proxy.netloc}` and passes it as `proxies=` to `requests.get`. The scheme and netloc come from the `ParseResult` that `checkProxyUrl` validated and returned, so an `-x http://127.0.0.1:8080` becomes `{'http': 'http://127.0.0.1:8080'}`. Without a proxy, `requests.get(urly, headers=headers)` is called directly.\n4. Any `Exception` from the request is printed and triggers `sys.exit(4)` — this is the transport-failure exit, before any extraction.\n5. **UTF-8 encoding fallback:** after the response arrives, `do_search` checks `if r.encoding is None`, setting it to `'UTF-8'` when the server did not declare an encoding, then decodes the body with `self.results = r.content.decode(r.encoding)` and appends it to the running total (`self.totalresults += self.results`).\n\n`process()` then sleeps `time.sleep(1)` before advancing the counter by the plugin's step. This one-second sleep between pages is the rate limiter that keeps requests to any single engine spaced apart; because plugins run sequentially, `-e all` inherits this pacing across the whole run. The step (e.g. 100 for Google-based queries, 50 for Bing) and starting counter are chosen per plugin via `init_search` and control how many pages are fetched before the counter reaches the limit."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:119",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L119"
                },
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                },
                {
                  "label": "EmailHarvester.py:275",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L275"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "yes",
              "finding": "给出mod.Plugin→register_plugin→registry→CLI回调，并由search驱动host初始化、页累积和整阶段parser；关键跨文件关系正确。",
              "checkpoint": "EmailHarvester.py 的 eager loader 调用插件 Plugin 并注册回调，CLI dispatch→plugins/*.py search→共享 host 获取/累积响应→get_emails→myparser；不能误写成每页解析/去重。",
              "excerpts": [
                {
                  "label": "plugin-system.md:59",
                  "quote": "1. The core imports the module and calls `mod.Plugin(self, conf)`.\n2. The plugin's `__init__(self, app, conf)` calls `app.register_plugin(name, {'search': search})`.\n3. `register_plugin(search_method, functions)` inserts `name → {'search': search}` into `self.plugins`.\n4. `get_plugins()` returns that dict so the CLI can dispatch."
                },
                {
                  "label": "plugin-system.md:67",
                  "quote": "app_emailharvester = None\n\ndef search(domain, limit):\n    url = 'https://www.google.com/search?num=100&start={counter}&hl=en&q=\"%40{word}\"'\n    app_emailharvester.init_search(url, domain, limit, 0, 100, 'Google')\n    app_emailharvester.process()\n    return app_emailharvester.get_emails()\n\nclass Plugin:\n    def __init__(self, app, conf):\n        global app_emailharvester, config\n        #config = conf\n        app.register_plugin('googles', {'search': search})\n        app_emailharvester = app"
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:101",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L101"
                },
                {
                  "label": "EmailHarvester.py:110",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L110"
                },
                {
                  "label": "plugins/googles.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L28"
                },
                {
                  "label": "EmailHarvester.py:156",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L156"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到原生打包的 prefix、显式缺口、suffix 与匹配答案；现有源码/示例不能直接等同补全题。",
              "checkpoint": "完整原始 Wiki 内是否已有同一个对象中的 prefix、显式待补全区域、suffix、参考答案；仅能从源码二次切片不算。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "fix",
              "finding": "具体排除输入 -r google,twitter 被配对为跳过Google和Twitter；真实只跳过twitter，googles仍运行。",
              "checkpoint": "CLI 或分页的具体输入与明确预期输出/失败结果成对出现；检查 google 调用/排除与 start、step、limit 的预期，不把测试建议当作已成型样例。",
              "excerpts": [
                {
                  "label": "end-to-end-search.md:70",
                  "quote": "The `--exclude` list is parsed earlier by splitting `args.exclude` on commas (an empty `[]` when not given), and each plugin whose key appears in that list is skipped. Because a `site` source like `twitter.py` is just another top-level plugin key, exclusion works uniformly across both single-engine and site-scoped plugins — for example `-r google,twitter` skips both the Google engine and the multi-engine Twitter source. Each plugin's `search()` runs synchronously in sequence, so an `all` run issues its requests one engine at a time, not in parallel."
                },
                {
                  "label": "plugin-system.md:121",
                  "quote": "Two naming points are worth noting. First, the single-engine Google plugin is registered under the key `googles` (plural), not `google`, so users select it with `-e googles`. Second, the site-scoped plugins and the single-engine plugins are all loaded and dispatched identically — a \"site\" is just another plugin key that happens to iterate several upstream engines internally. The `-r/--exclude` option works uniformly across both categories because it matches the top-level `plugins` dict keys."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:275",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L275"
                },
                {
                  "label": "plugins/googles.py:39",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L39"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到与具体样例及执行上下文绑定的实际运行记录；使用说明、样例输出和生成验证元数据不等于已执行。",
              "checkpoint": "具体 CLI/分页样例的实际执行结果及上下文记录；仅命令、示意输出、源码断言、生成时间/verified 元数据不算。",
              "excerpts": [
                {
                  "label": "result-extraction.md:6",
                  "quote": "verified:\n  - by: openwiki/0.5.0\n    at: 2026-09-03T03:10:37.041Z\nsources:\n  - id: openwiki-source-7b7340c4d69871026e3cea34\n    resource: repo://EmailHarvester.py\ngenerated: { by: \"openwiki/0.5.0\", at: \"2026-09-03T03:10:37.041Z\" }"
                }
              ],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "front matter列出真实repo://文件，正文明确search/注册/host符号；所检定位包括plugins/googles.py，没有依赖审计者额外造来源。",
              "checkpoint": "所检事实能否通过 Wiki 自带的文件、符号或行号指针追到固定源码；空 href 但可用文件/行标签仍可追溯，引用不存在的 plugins/google.py 则需修正。",
              "excerpts": [
                {
                  "label": "plugin-system.md:9",
                  "quote": "sources:\n  - id: openwiki-source-7b7340c4d69871026e3cea34\n    resource: repo://EmailHarvester.py\n  - id: openwiki-source-3826a75ed0192947a0cca0be\n    resource: repo://plugins/ask.py\n  - id: openwiki-source-14d3242d47f817333fbecd60\n    resource: repo://plugins/bing.py\n  - id: openwiki-source-1d9fb664e94656415418917c\n    resource: repo://plugins/github.py\n  - id: openwiki-source-a4130520adb92a0b979f9da8\n    resource: repo://plugins/googleplus.py\n  - id: openwiki-source-bbb467226e4a8fa7d8eb9c9d\n    resource: repo://plugins/googles.py"
                },
                {
                  "label": "plugin-system.md:67",
                  "quote": "app_emailharvester = None\n\ndef search(domain, limit):\n    url = 'https://www.google.com/search?num=100&start={counter}&hl=en&q=\"%40{word}\"'\n    app_emailharvester.init_search(url, domain, limit, 0, 100, 'Google')\n    app_emailharvester.process()\n    return app_emailharvester.get_emails()\n\nclass Plugin:\n    def __init__(self, app, conf):\n        global app_emailharvester, config\n        #config = conf\n        app.register_plugin('googles', {'search': search})\n        app_emailharvester = app"
                }
              ],
              "sources": [
                {
                  "label": "plugins/googles.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L28"
                },
                {
                  "label": "EmailHarvester.py:94",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L94"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "codewiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "给出抽象插件契约和去self的循环示意，但不是所选实际process/init_search/dispatch的连续源码上下文；新增Example插件不冒充原实现。",
              "checkpoint": "共享 init_search/process、插件 search 与 CLI dispatch 的连续实现上下文；明确区分源码、抽象模板与新增使用例，检查代码块是否被非 Python 内容污染。",
              "excerpts": [
                {
                  "label": "overview.md:221",
                  "quote": "def search(domain, limit):\n    app_emailharvester.init_search(\n        url_template,\n        domain,\n        limit,\n        counter_start,\n        counter_step,\n        display_name,\n    )\n    app_emailharvester.process()\n    return app_emailharvester.get_emails()"
                },
                {
                  "label": "overview.md:444",
                  "quote": "The CLI calls the option a result limit, but the implementation treats it as a threshold for an engine-specific counter.\n\nFor the shared loop:\n\n```python\nwhile counter < limit:\n    do_search()\n    sleep(1)\n    counter += step\n```\n\nConsequences:\n\n- At least one request is made when the initial counter is below the limit.\n- The reported count is the advanced offset, not the number of returned or parsed results.\n- Engines may return fewer rows than requested.\n- A limit smaller than the step still causes one full page request.\n- Composite site plugins apply the threshold once per underlying engine.\n- Exalead requests 10 elements per page but advances by 50, so its actual coverage may not match the displayed counter."
                }
              ],
              "sources": [
                {
                  "label": "plugins/googles.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L28"
                },
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "yes",
              "finding": "正确指出README的google与代码googles不一致，并给出有效bing CLI调用；接口/注册键没有被错误README覆盖。",
              "checkpoint": "CLI 默认 limit=100；search(domain, limit) 返回列表；Google 实际注册键为 googles，-e google 不能调用 Google，all 模式排除 Google 也必须用 googles。",
              "excerpts": [
                {
                  "label": "overview.md:256",
                  "quote": "The Google plugin registers as `googles`, although examples in the README refer to `google`. Consumers must use the actual registry key exposed by the code."
                },
                {
                  "label": "overview.md:647",
                  "quote": "python3 EmailHarvester.py -d example.com -e bing -l 100"
                }
              ],
              "sources": [
                {
                  "label": "plugins/googles.py:39",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L39"
                },
                {
                  "label": "EmailHarvester.py:223",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L223"
                },
                {
                  "label": "plugins/bing.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/bing.py#L28"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "yes",
              "finding": "将limit解释为engine-specific counter阈值，而非实际结果数；给出小于step仍取整页和set去重顺序不保证的限制。",
              "checkpoint": "counter<limit 控制分页阈值，start/step 决定请求次数；响应解码后累加 totalresults；阶段与全局去重均为精确字符串 set 去重，不保证顺序。",
              "excerpts": [
                {
                  "label": "overview.md:444",
                  "quote": "The CLI calls the option a result limit, but the implementation treats it as a threshold for an engine-specific counter.\n\nFor the shared loop:\n\n```python\nwhile counter < limit:\n    do_search()\n    sleep(1)\n    counter += step\n```\n\nConsequences:\n\n- At least one request is made when the initial counter is below the limit.\n- The reported count is the advanced offset, not the number of returned or parsed results.\n- Engines may return fewer rows than requested.\n- A limit smaller than the step still causes one full page request.\n- Composite site plugins apply the threshold once per underlying engine.\n- Exalead requests 10 elements per page but advances by 50, so its actual coverage may not match the displayed counter."
                },
                {
                  "label": "overview.md:467",
                  "quote": "The final result list is deduplicated with `list(set(data))`. Ordering is therefore not guaranteed."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:143",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L143"
                },
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                },
                {
                  "label": "EmailHarvester.py:174",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L174"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "yes",
              "finding": "覆盖未知键exit3、HTTP异常exit4且终止all，以及无timeout/status检查/retry等真实限制。",
              "checkpoint": "未注册引擎退出 3；共享请求异常退出 4 并终止整轮；没有 timeout、retry/backoff 或按 HTTP 状态自动恢复的保证。",
              "excerpts": [
                {
                  "label": "overview.md:485",
                  "quote": "| Unknown plugin key | Print error and exit code 3 |\n| HTTP request exception | Print exception and exit code 4 |\n| No discovered emails | Print error and exit code 4 |\n| Text/XML write failure | Print an error and continue through the local save block |\n| Non-success HTTP status | Not checked explicitly |\n| Unexpected response layout | Parser may return no results; no engine-specific recovery |\n| Rate limiting or blocking | No retry, backoff, CAPTCHA detection, or status-aware handling |\n\nBecause request failures call `sys.exit(4)` inside the runtime, a failure in one plugin terminates an `all` run rather than allowing remaining plugins to continue."
                },
                {
                  "label": "overview.md:590",
                  "quote": "7. **No timeouts, status checks, or retries** make transient failures and provider throttling hard to distinguish."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:129",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L129"
                },
                {
                  "label": "EmailHarvester.py:138",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L138"
                },
                {
                  "label": "EmailHarvester.py:280",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L280"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "yes",
              "finding": "明确init_search替换阶段状态、请求解码累计后sleep并递增，get_emails在阶段循环完成后执行；同步共享状态语义正确。",
              "checkpoint": "每次 init_search 清空阶段缓冲；共享循环按 request→sleep(1)→counter+=step；完成整个阶段后解析，再进入下一阶段/插件，插件顺序执行。",
              "excerpts": [
                {
                  "label": "overview.md:167",
                  "quote": "The shared state includes `url`, `word`, `counter`, `step`, `limit`, `activeEngine`, `results`, and `totalresults`. A plugin must call `init_search()` before `process()`; each call replaces the previous search state."
                },
                {
                  "label": "overview.md:341",
                  "quote": "    CLI->>Plugin: search(domain, limit)\n    Plugin->>Core: init_search(template, domain, limit, start, step, name)\n    loop while counter is less than limit\n        Plugin->>Core: process loop\n        Core->>Core: format counter and word\n        Core->>HTTP: GET URL with User-Agent and optional proxy\n        HTTP-->>Core: response bytes and encoding\n        Core->>Core: decode and append to totalresults\n        Core->>Core: sleep 1 second and advance counter\n    end\n    Plugin->>Core: get_emails()\n    Core->>Parser: extract(totalresults, domain)\n    Core->>Parser: emails()\n    Parser-->>Core: unique matches\n    Core-->>Plugin: email list"
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:119",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L119"
                },
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                },
                {
                  "label": "EmailHarvester.py:156",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L156"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "yes",
              "finding": "eager loader→Plugin注册→search→共享host→parser链路有具体时序与数据描述，未把每次GET误当解析边界。",
              "checkpoint": "EmailHarvester.py 的 eager loader 调用插件 Plugin 并注册回调，CLI dispatch→plugins/*.py search→共享 host 获取/累积响应→get_emails→myparser；不能误写成每页解析/去重。",
              "excerpts": [
                {
                  "label": "overview.md:203",
                  "quote": "\n    Main->>Host: EmailHarvester(userAgent, proxy)\n    Host->>FS: list all files\n    loop each .py file\n        Host->>Mod: import by filename\n        Host->>Mod: Plugin(host, config)\n        Mod->>Reg: register_plugin(name, search callable)\n        Mod->>Mod: store host in module global\n    end\n    Host-->>Main: initialized host\n    Main->>Reg: get_plugins()"
                },
                {
                  "label": "overview.md:341",
                  "quote": "    CLI->>Plugin: search(domain, limit)\n    Plugin->>Core: init_search(template, domain, limit, start, step, name)\n    loop while counter is less than limit\n        Plugin->>Core: process loop\n        Core->>Core: format counter and word\n        Core->>HTTP: GET URL with User-Agent and optional proxy\n        HTTP-->>Core: response bytes and encoding\n        Core->>Core: decode and append to totalresults\n        Core->>Core: sleep 1 second and advance counter\n    end\n    Plugin->>Core: get_emails()\n    Core->>Parser: extract(totalresults, domain)\n    Core->>Parser: emails()\n    Parser-->>Core: unique matches\n    Core-->>Plugin: email list"
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:101",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L101"
                },
                {
                  "label": "plugins/googles.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L28"
                },
                {
                  "label": "EmailHarvester.py:156",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L156"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到原生打包的 prefix、显式缺口、suffix 与匹配答案；现有源码/示例不能直接等同补全题。",
              "checkpoint": "完整原始 Wiki 内是否已有同一个对象中的 prefix、显式待补全区域、suffix、参考答案；仅能从源码二次切片不算。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "提供测试缺口与改造建议，但所检CLI/分页部分没有具体数值输入加预期结果/断言的成型测试对。",
              "checkpoint": "CLI 或分页的具体输入与明确预期输出/失败结果成对出现；检查 google 调用/排除与 start、step、limit 的预期，不把测试建议当作已成型样例。",
              "excerpts": [
                {
                  "label": "overview.md:595",
                  "quote": "12. **No automated test suite is present**, leaving parser correctness, URL generation, plugin discovery, and file output unverified.\n\n## Recommended Evolution Path\n\nA low-risk modernization sequence would be:\n\n1. Introduce immutable `SearchConfig` and `SearchResult` data structures.\n2. Replace plugin module globals with plugin instances that receive the host through normal object references.\n3. Separate HTTP transport, pagination, parsing, orchestration, and serialization behind small interfaces.\n4. Add request timeouts, status handling, retry/backoff policy, and per-plugin failure reporting.\n5. Escape the target domain with `re.escape` and add parser unit tests with stored HTML fixtures."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:149",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L149"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到与具体样例及执行上下文绑定的实际运行记录；使用说明、样例输出和生成验证元数据不等于已执行。",
              "checkpoint": "具体 CLI/分页样例的实际执行结果及上下文记录；仅命令、示意输出、源码断言、生成时间/verified 元数据不算。",
              "excerpts": [
                {
                  "label": "overview.md:595",
                  "quote": "12. **No automated test suite is present**, leaving parser correctness, URL generation, plugin discovery, and file output unverified.\n\n## Recommended Evolution Path\n\nA low-risk modernization sequence would be:\n\n1. Introduce immutable `SearchConfig` and `SearchResult` data structures.\n2. Replace plugin module globals with plugin instances that receive the host through normal object references.\n3. Separate HTTP transport, pagination, parsing, orchestration, and serialization behind small interfaces.\n4. Add request timeouts, status handling, retry/backoff policy, and per-plugin failure reporting.\n5. Escape the target domain with `re.escape` and add parser unit tests with stored HTML fixtures."
                }
              ],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "Wiki自带核心文件与googles.py等真实链接，并在正文标出方法名；这些文件/符号足以追踪所检事实，虽未逐条附行号。",
              "checkpoint": "所检事实能否通过 Wiki 自带的文件、符号或行号指针追到固定源码；空 href 但可用文件/行标签仍可追溯，引用不存在的 plugins/google.py 则需修正。",
              "excerpts": [
                {
                  "label": "overview.md:674",
                  "quote": "- [Core CLI, runtime, parser, validation, and output](../repo/EmailHarvester.py)\n- [ASK custom plugin](../repo/plugins/ask.py)\n- [Baidu plugin](../repo/plugins/baidu.py)\n- [Bing plugin](../repo/plugins/bing.py)\n- [Dogpile plugin](../repo/plugins/dogpile.py)\n- [Exalead plugin](../repo/plugins/exalead.py)\n- [Google plugin](../repo/plugins/googles.py)"
                },
                {
                  "label": "overview.md:256",
                  "quote": "The Google plugin registers as `googles`, although examples in the README refer to `google`. Consumers must use the actual registry key exposed by the code."
                }
              ],
              "sources": [
                {
                  "label": "EmailHarvester.py:119",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/EmailHarvester.py#L119"
                },
                {
                  "label": "plugins/googles.py:28",
                  "url": "https://github.com/maldevel/EmailHarvester/blob/934d4121a92ff4f55aa67921e000469aa56b9595/plugins/googles.py#L28"
                }
              ],
              "correctionCase": null
            }
          }
        }
      }
    },
    {
      "name": "Figma Flutter MCP",
      "slug": "mhmzdev/figma-flutter-mcp",
      "commit": "5907212d028881341db054b404724e75fed710b6",
      "tools": {
        "local-skill": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "有parser返回形状、验证规则与handler流程描述，但没有选定parser/handler的连续实现代码。",
              "checkpoint": "选定parseComponentInput、validateAndConvertNodeId和analyze_figma_component handler的连续实现上下文；只有签名、schema表或流程图不等同函数实现。",
              "excerpts": [
                {
                  "label": "2.4-Figma Identifier Parsing and Validation.md:7",
                  "quote": "`parseComponentInput()` accepts a Figma URL, or a direct file identifier accompanied by a separate node ID."
                },
                {
                  "label": "4.2-Component Input and Variant Workflow.md:9",
                  "quote": "After checking the API token, the handler optionally resets the shared style library and calls `parseComponentInput()`."
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:23",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L23"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:63",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L63"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "原文介绍了输入形式和失败返回，但没有说明编号简写在什么情况下会解析失败。因此记为部分说明，不是事实错误。",
              "checkpoint": "检查URL或input=fileId+独立nodeId契约、compact分支限制；主工具input必填、nodeId可选及userDefinedComponent=false/maxChildNodes=10/includeVariants/exportAssets/useDeduplication=true/generateFlutterCode/resetStyleLibrary=false/projectPath=cwd；核对实际MCP调用与content:[{type:'text',text}]返回，不用figmaUrl/options REST例替代。",
              "excerpts": [
                {
                  "label": "2.4-Figma Identifier Parsing and Validation.md:7",
                  "quote": "It also recognizes a compact colon-delimited input."
                },
                {
                  "label": "4.1-Flutter Tool Registry and Request Pipeline.md:24",
                  "quote": "Its schema requires an `input` string and optionally accepts a separate `nodeId`, allowing a caller to provide a Figma URL or a file identifier plus node identifier."
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:43",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L43"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:49",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L49"
                }
              ],
              "correctionCase": "figma-compact-input"
            },
            "C": {
              "status": "partial",
              "finding": "原文介绍了输入形式和失败返回，但没有说明编号简写在什么情况下会解析失败。因此记为部分说明，不是事实错误。",
              "checkpoint": "检查ComponentInput的fileId/nodeId/source/isValid/error形状，空白处理、123-456→123:456，以及abcdefghijkl:123:456和abcdefghijkl:123-456在当前compact实现均失败的转换事实。",
              "excerpts": [
                {
                  "label": "2.4-Figma Identifier Parsing and Validation.md:7",
                  "quote": "It also recognizes a compact colon-delimited input. The successful result contains `fileId`, `nodeId`, a source marker of `url` or `direct`, and `isValid: true`."
                },
                {
                  "label": "2.4-Figma Identifier Parsing and Validation.md:37",
                  "quote": "`validateAndConvertNodeId()` trims the input and, when it contains hyphens but no colon, replaces the first hyphen with a colon."
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:43",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L43"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:164",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L164"
                }
              ],
              "correctionCase": "figma-compact-input"
            },
            "D": {
              "status": "partial",
              "finding": "原文介绍了输入形式和失败返回，但没有说明编号简写在什么情况下会解析失败。因此记为部分说明，不是事实错误。",
              "checkpoint": "检查fileId为10-50位字母数字/横线/下划线、nodeId最终为数字:数字、错误返回isValid=false及现存compact缺陷；主handler缺token和不合法组件类型/FRAME opt-in的失败边界。",
              "excerpts": [
                {
                  "label": "2.4-Figma Identifier Parsing and Validation.md:29",
                  "quote": "File identifiers are trimmed and must be strings between ten and fifty characters. Only ASCII letters, digits, hyphens, and underscores are accepted."
                },
                {
                  "label": "2.4-Figma Identifier Parsing and Validation.md:7",
                  "quote": "It also recognizes a compact colon-delimited input."
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:43",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L43"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:130",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L130"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:107",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L107"
                }
              ],
              "correctionCase": "figma-compact-input"
            },
            "E": {
              "status": "yes",
              "finding": "准确描述token检查后可选reset，再parse/fetch及提取/报告；deduplicated报告先追加URL视觉上下文再可选Flutter实现，没有虚构并行。",
              "checkpoint": "检查handler顺序token guard→可选共享样式reset→parse/validate→Figma fetch→类型/variant处理→extract/report；可选visual context与Flutter code按源码串行追加，图文不虚构并行。",
              "excerpts": [
                {
                  "label": "4.2-Component Input and Variant Workflow.md:9",
                  "quote": "After checking the API token, the handler optionally resets the shared style library and calls `parseComponentInput()`. An invalid reference returns a text error before any remote request. A valid reference is passed to `FigmaService.getNode()`, and a missing node similarly ends the request with a precise message."
                },
                {
                  "label": "4.2-Component Input and Variant Workflow.md:57",
                  "quote": "The resulting model is formatted as a comprehensive deduplicated report. When the original input was a URL, reconstructed Figma context is appended, and `generateFlutterCode` can add implementation output."
                }
              ],
              "sources": [
                {
                  "label": "src/tools/flutter/components/component-tool.ts:64",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L64"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:192",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L192"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "partial",
              "finding": "handler→parser→FigmaService→extractor/report的概念链正确，也区分无网络extractor；但没有说明components/index导出桶和具体源文件级衔接。",
              "checkpoint": "检查component-tool→components/index导出桶→utils/figma-url-parser，以及handler调用FigmaService.getNode取FigmaNode，再把节点交extractor和report helpers；不能把无网络extractor画成FigmaService调用者。",
              "excerpts": [
                {
                  "label": "4.2-Component Input and Variant Workflow.md:9",
                  "quote": "A valid reference is passed to `FigmaService.getNode()`, and a missing node similarly ends the request with a precise message."
                },
                {
                  "label": "3-Design Extraction Engine.md:68",
                  "quote": "The extraction engine ends at typed analysis. It does not open MCP transports, fetch nodes from the network, write assets into a project, or decide final Flutter component structure."
                }
              ],
              "sources": [
                {
                  "label": "src/tools/flutter/components/component-tool.ts:5",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L5"
                },
                {
                  "label": "src/extractors/components/index.ts:64",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/extractors/components/index.ts#L64"
                },
                {
                  "label": "src/extractors/components/core.ts:35",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/extractors/components/core.ts#L35"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未发现前缀、显式缺失区、后缀及对应答案的封装补全任务；字段占位符或生成器placeholder不是这类样本。",
              "checkpoint": "完整Wiki查找已封装prefix+显式hole+suffix+匹配答案任务；现有代码或未来可生成样本不能代替现成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "只有123:456格式示意和hyphen替换规则，以及测试建议；未明确给出所选路径的具体输入/完整预期对，不能把审查者推导出的123-456输入补算进Wiki。",
              "checkpoint": "在所选ID解析/主组件工具路径内查找至少一个具体输入及明确预期结果/断言，核对给出的关键预期；123-456→123:456文字对也可计入，但无效调用的成功响应算错误。",
              "excerpts": [
                {
                  "label": "2.4-Figma Identifier Parsing and Validation.md:37",
                  "quote": "The API expects node IDs shaped like `123:456`, while Figma URLs commonly encode the separator as a hyphen."
                },
                {
                  "label": "1.5-Package and Contributor Entry Points.md:68",
                  "quote": "The required baseline is to run `npm run build` and test locally with `npm run dev`."
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:164",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L164"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未发现与具体示例和执行环境绑定的实际运行记录；构建/调试建议、期望返回和verified元数据不算实跑。",
              "checkpoint": "完整Wiki查找与例子和执行上下文绑定的实跑记录；构建命令、CI说明、verified标签和预期输出不是实跑证据。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "partial",
              "finding": "Wiki有src目录及部分入口文件表，受检parser和component handler页却没有对应文件/行号指针；函数名有助检索但证据定位不完整。",
              "checkpoint": "检查上述受检材料自身是否给出匹配源码文件/符号或行号；目录线索不足算partial，Sources指到不存在的.js源码文件与TS正确ESM import写法需区分。",
              "excerpts": [
                {
                  "label": "1.5-Package and Contributor Entry Points.md:38",
                  "quote": "| Tools | `src/tools` | Flutter orchestration and generation |"
                },
                {
                  "label": "1.5-Package and Contributor Entry Points.md:41",
                  "quote": "| Utilities | `src/utils` | Cross-cutting helpers |"
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:23",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L23"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:63",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L63"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "devinwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "Component Analysis Tools/API Reference给出参数表和流程图，未保留parseComponentInput/validator或主handler的连续实现；集成请求例也不是内部实现。",
              "checkpoint": "选定parseComponentInput、validateAndConvertNodeId和analyze_figma_component handler的连续实现上下文；只有签名、schema表或流程图不等同函数实现。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "    Start[\"Input Processing\"] --> Parse[\"parseComponentInput\"]\n    Parse --> Valid{\"Valid Input?\"}"
                },
                {
                  "label": "wiki.json",
                  "quote": "| `input` | string | Yes | - | Figma component URL or file ID |"
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:23",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L23"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:63",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L63"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "API Reference的input/nodeId及默认表正确；集成页却使用不存在的/mcp/tools/analyze_figma_component REST路径和figmaUrl/options形状，并给对象分析响应；真实接口是MCP工具参数与文本content返回。",
              "checkpoint": "检查URL或input=fileId+独立nodeId契约、compact分支限制；主工具input必填、nodeId可选及userDefinedComponent=false/maxChildNodes=10/includeVariants/exportAssets/useDeduplication=true/generateFlutterCode/resetStyleLibrary=false/projectPath=cwd；核对实际MCP调用与content:[{type:'text',text}]返回，不用figmaUrl/options REST例替代。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "POST http://localhost:3333/mcp/tools/analyze_figma_component"
                },
                {
                  "label": "wiki.json",
                  "quote": "  \"figmaUrl\": \"https://www.figma.com/file/ABC123/Design?node-id=1%3A2\",\n  \"options\": {"
                }
              ],
              "sources": [
                {
                  "label": "src/server.ts:48",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/server.ts#L48"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:49",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L49"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "partial",
              "finding": "反复命名parseComponentInput并说明URL/独立nodeId，但没有ComponentInput完整字段、节点123-456规范化或compact失败转换；不把其它extractor的数据结构当作同一检查点。",
              "checkpoint": "检查ComponentInput的fileId/nodeId/source/isValid/error形状，空白处理、123-456→123:456，以及abcdefghijkl:123:456和abcdefghijkl:123-456在当前compact实现均失败的转换事实。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "| `nodeId` | string | optional | Node ID (if providing file ID separately) |"
                },
                {
                  "label": "wiki.json",
                  "quote": "    Start[\"Input Processing\"] --> Parse[\"parseComponentInput\"]"
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:8",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L8"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:164",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L164"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:43",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L43"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "fix",
              "finding": "类型表正确约束FRAME opt-in，但成功集成例里的fileId=ABC123仅6字符，不满足10-50限制；请求还会先因错误形状/路由失败。缺少compact缺陷说明及完整ID失败边界。",
              "checkpoint": "检查fileId为10-50位字母数字/横线/下划线、nodeId最终为数字:数字、错误返回isValid=false及现存compact缺陷；主handler缺token和不合法组件类型/FRAME opt-in的失败边界。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "  \"figmaUrl\": \"https://www.figma.com/file/ABC123/Design?node-id=1%3A2\","
                },
                {
                  "label": "wiki.json",
                  "quote": "Response includes structured component analysis that AI agents can process:"
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:130",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L130"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:83",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L83"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:107",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L107"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:43",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L43"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "partial",
              "finding": "图中parse→fetch→类型/variants→extract/report次序相关且基本正确；token guard与reset相对于parse的先后及visual/code串行追加未展开。",
              "checkpoint": "检查handler顺序token guard→可选共享样式reset→parse/validate→Figma fetch→类型/variant处理→extract/report；可选visual context与Flutter code按源码串行追加，图文不虚构并行。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "    Start[\"Input Processing\"] --> Parse[\"parseComponentInput\"]\n    Parse --> Valid{\"Valid Input?\"}\n    Valid -->|No| Error[\"Return Error\"]\n    Valid -->|Yes| GetNode[\"figmaService.getNode\"]"
                },
                {
                  "label": "wiki.json",
                  "quote": "| `resetStyleLibrary` | boolean | false | Reset style library before analysis |"
                }
              ],
              "sources": [
                {
                  "label": "src/tools/flutter/components/component-tool.ts:64",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L64"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:192",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L192"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "主处理图正确让tool先getNode，但架构图又画ComponentExtractor、DeduplicatedComponentExtractor、VariantAnalyzer调用FigmaService；这些extractor接收已获取的节点，网络调用由handler执行。",
              "checkpoint": "检查component-tool→components/index导出桶→utils/figma-url-parser，以及handler调用FigmaService.getNode取FigmaNode，再把节点交extractor和report helpers；不能把无网络extractor画成FigmaService调用者。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "    CompExt --> FigmaService\n    DedupeExt --> FigmaService\n    VarAnalyzer --> FigmaService"
                },
                {
                  "label": "wiki.json",
                  "quote": "    Valid -->|Yes| GetNode[\"figmaService.getNode\"]"
                }
              ],
              "sources": [
                {
                  "label": "src/tools/flutter/components/component-tool.ts:95",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L95"
                },
                {
                  "label": "src/extractors/components/core.ts:35",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/extractors/components/core.ts#L35"
                },
                {
                  "label": "src/extractors/components/deduplicated-extractor.ts:41",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/extractors/components/deduplicated-extractor.ts#L41"
                },
                {
                  "label": "src/extractors/components/variant-analyzer.ts:14",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/extractors/components/variant-analyzer.ts#L14"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未发现前缀、显式缺失区、后缀及对应答案的封装补全任务；字段占位符或生成器placeholder不是这类样本。",
              "checkpoint": "完整Wiki查找已封装prefix+显式hole+suffix+匹配答案任务；现有代码或未来可生成样本不能代替现成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "fix",
              "finding": "存在具体主组件请求和声称的成功响应，但请求路径/字段错误且ABC123文件ID过短，所给analysis/flutterGuidance对象不是该handler的真实返回形状；不能充当正确输入预期对。",
              "checkpoint": "在所选ID解析/主组件工具路径内查找至少一个具体输入及明确预期结果/断言，核对给出的关键预期；123-456→123:456文字对也可计入，但无效调用的成功响应算错误。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "  \"figmaUrl\": \"https://www.figma.com/file/ABC123/Design?node-id=1%3A2\","
                },
                {
                  "label": "wiki.json",
                  "quote": "{\n  \"analysis\": {\n    \"metadata\": { \"name\": \"PrimaryButton\", \"type\": \"COMPONENT\" },"
                }
              ],
              "sources": [
                {
                  "label": "src/server.ts:48",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/server.ts#L48"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:130",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L130"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:261",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L261"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未发现与具体示例和执行环境绑定的实际运行记录；构建/调试建议、期望返回和verified元数据不算实跑。",
              "checkpoint": "完整Wiki查找与例子和执行上下文绑定的实跑记录；构建命令、CI说明、verified标签和预期输出不是实跑证据。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "fix",
              "finding": "多数component-tool.ts指针可定位；但API Reference把src/extractors/components/index.js放进Sources，当前快照没有该源文件，真实源码是index.ts。这不同于TS源码里正确的ESM .js import写法。",
              "checkpoint": "检查上述受检材料自身是否给出匹配源码文件/符号或行号；目录线索不足算partial，Sources指到不存在的.js源码文件与TS正确ESM import写法需区分。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "**Sources:** [src/tools/flutter/components/component-tool.ts:44-277](), [src/extractors/components/index.js]()"
                }
              ],
              "sources": [
                {
                  "label": "src/extractors/components/index.ts:64",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/extractors/components/index.ts#L64"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:14",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L14"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "deepwiki-open": {
          "available": false,
          "cells": {
            "A": {
              "status": "no_artifact",
              "finding": "本次生成在2400秒后超时，仅有运行日志/元数据，没有Figma Wiki产物；单列不可用，不当作内容缺失。",
              "checkpoint": "选定parseComponentInput、validateAndConvertNodeId和analyze_figma_component handler的连续实现上下文；只有签名、schema表或流程图不等同函数实现。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "B": {
              "status": "no_artifact",
              "finding": "本次生成在2400秒后超时，仅有运行日志/元数据，没有Figma Wiki产物；单列不可用，不当作内容缺失。",
              "checkpoint": "检查URL或input=fileId+独立nodeId契约、compact分支限制；主工具input必填、nodeId可选及userDefinedComponent=false/maxChildNodes=10/includeVariants/exportAssets/useDeduplication=true/generateFlutterCode/resetStyleLibrary=false/projectPath=cwd；核对实际MCP调用与content:[{type:'text',text}]返回，不用figmaUrl/options REST例替代。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "C": {
              "status": "no_artifact",
              "finding": "本次生成在2400秒后超时，仅有运行日志/元数据，没有Figma Wiki产物；单列不可用，不当作内容缺失。",
              "checkpoint": "检查ComponentInput的fileId/nodeId/source/isValid/error形状，空白处理、123-456→123:456，以及abcdefghijkl:123:456和abcdefghijkl:123-456在当前compact实现均失败的转换事实。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "D": {
              "status": "no_artifact",
              "finding": "本次生成在2400秒后超时，仅有运行日志/元数据，没有Figma Wiki产物；单列不可用，不当作内容缺失。",
              "checkpoint": "检查fileId为10-50位字母数字/横线/下划线、nodeId最终为数字:数字、错误返回isValid=false及现存compact缺陷；主handler缺token和不合法组件类型/FRAME opt-in的失败边界。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "E": {
              "status": "no_artifact",
              "finding": "本次生成在2400秒后超时，仅有运行日志/元数据，没有Figma Wiki产物；单列不可用，不当作内容缺失。",
              "checkpoint": "检查handler顺序token guard→可选共享样式reset→parse/validate→Figma fetch→类型/variant处理→extract/report；可选visual context与Flutter code按源码串行追加，图文不虚构并行。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "F": {
              "status": "no_artifact",
              "finding": "本次生成在2400秒后超时，仅有运行日志/元数据，没有Figma Wiki产物；单列不可用，不当作内容缺失。",
              "checkpoint": "检查component-tool→components/index导出桶→utils/figma-url-parser，以及handler调用FigmaService.getNode取FigmaNode，再把节点交extractor和report helpers；不能把无网络extractor画成FigmaService调用者。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "G": {
              "status": "no_artifact",
              "finding": "本次生成在2400秒后超时，仅有运行日志/元数据，没有Figma Wiki产物；单列不可用，不当作内容缺失。",
              "checkpoint": "完整Wiki查找已封装prefix+显式hole+suffix+匹配答案任务；现有代码或未来可生成样本不能代替现成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "no_artifact",
              "finding": "本次生成在2400秒后超时，仅有运行日志/元数据，没有Figma Wiki产物；单列不可用，不当作内容缺失。",
              "checkpoint": "在所选ID解析/主组件工具路径内查找至少一个具体输入及明确预期结果/断言，核对给出的关键预期；123-456→123:456文字对也可计入，但无效调用的成功响应算错误。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "I": {
              "status": "no_artifact",
              "finding": "本次生成在2400秒后超时，仅有运行日志/元数据，没有Figma Wiki产物；单列不可用，不当作内容缺失。",
              "checkpoint": "完整Wiki查找与例子和执行上下文绑定的实跑记录；构建命令、CI说明、verified标签和预期输出不是实跑证据。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "no_artifact",
              "finding": "本次生成在2400秒后超时，仅有运行日志/元数据，没有Figma Wiki产物；单列不可用，不当作内容缺失。",
              "checkpoint": "检查上述受检材料自身是否给出匹配源码文件/符号或行号；目录线索不足算partial，Sources指到不存在的.js源码文件与TS正确ESM import写法需区分。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            }
          }
        },
        "openwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "parser/主handler以详细文字、参数表和时序图呈现，但缺少选定核心函数的连续实现片段。",
              "checkpoint": "选定parseComponentInput、validateAndConvertNodeId和analyze_figma_component handler的连续实现上下文；只有签名、schema表或流程图不等同函数实现。",
              "excerpts": [
                {
                  "label": "figma-data-model.md:165",
                  "quote": "`parseComponentInput(input, nodeId?)` in `src/utils/figma-url-parser.ts` is the single entry point for turning user input into a valid `{fileId, nodeId}` pair."
                },
                {
                  "label": "component-analysis.md:45",
                  "quote": "`analyze_figma_component` executes the following pipeline, all inside a single try/catch that returns a text report (or an error message) as MCP content:"
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:23",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L23"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:63",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L63"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "按相同口径，列出输入形式不足以证明对任意有效编号组合保证成功；该分支缺陷未说明，记覆盖不足。",
              "checkpoint": "检查URL或input=fileId+独立nodeId契约、compact分支限制；主工具input必填、nodeId可选及userDefinedComponent=false/maxChildNodes=10/includeVariants/exportAssets/useDeduplication=true/generateFlutterCode/resetStyleLibrary=false/projectPath=cwd；核对实际MCP调用与content:[{type:'text',text}]返回，不用figmaUrl/options REST例替代。",
              "excerpts": [
                {
                  "label": "component-analysis.md:49",
                  "quote": "Direct input accepts `fileId:nodeId` or a separately supplied `nodeId`;"
                },
                {
                  "label": "component-analysis.md:105",
                  "quote": "- **`input`** (required) — Figma component URL or file ID. `nodeId` — optional node ID when passing a file ID separately."
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:43",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L43"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:49",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L49"
                }
              ],
              "correctionCase": "figma-compact-input"
            },
            "C": {
              "status": "partial",
              "finding": "按相同口径，列出输入形式不足以证明对任意有效编号组合保证成功；该分支缺陷未说明，记覆盖不足。",
              "checkpoint": "检查ComponentInput的fileId/nodeId/source/isValid/error形状，空白处理、123-456→123:456，以及abcdefghijkl:123:456和abcdefghijkl:123-456在当前compact实现均失败的转换事实。",
              "excerpts": [
                {
                  "label": "figma-data-model.md:165",
                  "quote": "It accepts three forms and returns a `ComponentInput` (`fileId`, `nodeId`, `source: 'url' | 'direct'`, `isValid`, optional `error`):"
                },
                {
                  "label": "figma-data-model.md:169",
                  "quote": "- **`fileId:nodeId` format** — a two-segment colon-delimited string."
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:43",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L43"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:8",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L8"
                }
              ],
              "correctionCase": "figma-compact-input"
            },
            "D": {
              "status": "partial",
              "finding": "按相同口径，列出输入形式不足以证明对任意有效编号组合保证成功；该分支缺陷未说明，记覆盖不足。",
              "checkpoint": "检查fileId为10-50位字母数字/横线/下划线、nodeId最终为数字:数字、错误返回isValid=false及现存compact缺陷；主handler缺token和不合法组件类型/FRAME opt-in的失败边界。",
              "excerpts": [
                {
                  "label": "figma-data-model.md:179",
                  "quote": "requires a trimmed string of **10–50 characters** matching `^[a-zA-Z0-9\\-_]+$`;"
                },
                {
                  "label": "component-analysis.md:49",
                  "quote": "Direct input accepts `fileId:nodeId` or a separately supplied `nodeId`;"
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:43",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L43"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:130",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L130"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:65",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L65"
                }
              ],
              "correctionCase": "figma-compact-input"
            },
            "E": {
              "status": "fix",
              "finding": "文字正确给token→reset→parse/fetch；但时序图用par把Flutter code和visual context标为并行，源码先同步追加visual context再追加Flutter code，不存在该并行。",
              "checkpoint": "检查handler顺序token guard→可选共享样式reset→parse/validate→Figma fetch→类型/variant处理→extract/report；可选visual context与Flutter code按源码串行追加，图文不虚构并行。",
              "excerpts": [
                {
                  "label": "component-analysis.md:47",
                  "quote": "1. **Token guard** — if `FIGMA_API_KEY` is not configured, return an error immediately.\n2. **Optional style-library reset** — if `resetStyleLibrary` is true, call `FlutterStyleLibrary.getInstance().reset()` to clear any cached deduplicated styles."
                },
                {
                  "label": "component-analysis.md:88",
                  "quote": "    par optional Flutter code\n        T->>R: generateFlutterImplementation\n    and optional visual context\n        T->>R: generateComponentVisualContext\n    end"
                }
              ],
              "sources": [
                {
                  "label": "src/tools/flutter/components/component-tool.ts:64",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L64"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:192",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L192"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "yes",
              "finding": "对有效URL/独立ID分支，清楚连接parser源码及components/index重导出、handler服务调用、FigmaNode到extractor再到report helpers；不是仅列目录。输入接受范围的错误另保留在B/C/D。",
              "checkpoint": "检查component-tool→components/index导出桶→utils/figma-url-parser，以及handler调用FigmaService.getNode取FigmaNode，再把节点交extractor和report helpers；不能把无网络extractor画成FigmaService调用者。",
              "excerpts": [
                {
                  "label": "figma-data-model.md:173",
                  "quote": "These helpers are re-exported from the extractor entry points (`src/extractors/components/index.ts`, `src/extractors/screens/index.ts`) and used by the Flutter component/screen tools."
                },
                {
                  "label": "component-analysis.md:50",
                  "quote": "4. **Node fetch** — `FigmaService.getNode(fileId, nodeId)` fetches the node document from `/files/{fileId}/nodes?ids={nodeId}`."
                }
              ],
              "sources": [
                {
                  "label": "src/extractors/components/index.ts:64",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/extractors/components/index.ts#L64"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:95",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L95"
                },
                {
                  "label": "src/services/figma.ts:121",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/services/figma.ts#L121"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未发现前缀、显式缺失区、后缀及对应答案的封装补全任务；字段占位符或生成器placeholder不是这类样本。",
              "checkpoint": "完整Wiki查找已封装prefix+显式hole+suffix+匹配答案任务；现有代码或未来可生成样本不能代替现成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "yes",
              "finding": "提供具体123-456输入→123:456输出的文字对，与节点validator一致；这可作静态可核对预期，不是运行结果。compact错误只有格式契约，没有额外具体成功测试对。",
              "checkpoint": "在所选ID解析/主组件工具路径内查找至少一个具体输入及明确预期结果/断言，核对给出的关键预期；123-456→123:456文字对也可计入，但无效调用的成功响应算错误。",
              "excerpts": [
                {
                  "label": "component-analysis.md:49",
                  "quote": "Node IDs in URL dash form (`123-456`) are converted to API colon form (`123:456`)."
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:164",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L164"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未发现与具体示例和执行环境绑定的实际运行记录；构建/调试建议、期望返回和verified元数据不算实跑。",
              "checkpoint": "完整Wiki查找与例子和执行上下文绑定的实跑记录；构建命令、CI说明、verified标签和预期输出不是实跑证据。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "受检parser、handler、导出桶、服务和extractor都有正文文件名或repo://源码定位，配合符号能追溯；verified元数据不算I。",
              "checkpoint": "检查上述受检材料自身是否给出匹配源码文件/符号或行号；目录线索不足算partial，Sources指到不存在的.js源码文件与TS正确ESM import写法需区分。",
              "excerpts": [
                {
                  "label": "component-analysis.md:21",
                  "quote": "    resource: repo://src/tools/flutter/components/component-tool.ts"
                },
                {
                  "label": "component-analysis.md:31",
                  "quote": "    resource: repo://src/utils/figma-url-parser.ts"
                }
              ],
              "sources": [
                {
                  "label": "src/tools/flutter/components/component-tool.ts:63",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L63"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:23",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L23"
                },
                {
                  "label": "src/extractors/components/index.ts:64",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/extractors/components/index.ts#L64"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "codewiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "有parser签名、输入表与handler时序图，没有选定parser/validator/handler的连续实现片段。",
              "checkpoint": "选定parseComponentInput、validateAndConvertNodeId和analyze_figma_component handler的连续实现上下文；只有签名、schema表或流程图不等同函数实现。",
              "excerpts": [
                {
                  "label": "repo_figma_access.md:27",
                  "quote": "`parseComponentInput(input, nodeId?)` accepts three practical forms:"
                },
                {
                  "label": "repo_flutter_delivery.md:59",
                  "quote": "    Tool->>API: getNode"
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:23",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L23"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:63",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L63"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "URL/独立ID和MCP文本返回正确；combined项措辞为尝试且提醒冒号冲突，不当作已承诺成功。主工具必填/schema默认值和当前compact失败事实仍未完整交代。",
              "checkpoint": "检查URL或input=fileId+独立nodeId契约、compact分支限制；主工具input必填、nodeId可选及userDefinedComponent=false/maxChildNodes=10/includeVariants/exportAssets/useDeduplication=true/generateFlutterCode/resetStyleLibrary=false/projectPath=cwd；核对实际MCP调用与content:[{type:'text',text}]返回，不用figmaUrl/options REST例替代。",
              "excerpts": [
                {
                  "label": "repo_figma_access.md:32",
                  "quote": "| Separate identifiers | `input=<fileId>`, `nodeId=123:456` | Validates both and marks source as `direct` |"
                },
                {
                  "label": "repo_figma_access.md:33",
                  "quote": "| Combined direct input | `<fileId>:<nodeId parts>` | Attempts to split file and node data into a direct result |"
                }
              ],
              "sources": [
                {
                  "label": "src/tools/flutter/components/component-tool.ts:49",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L49"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:43",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L43"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "partial",
              "finding": "123-456→123:456和失败isValid=false正确；未完整给ComponentInput字段及compact两类具体失败转换，只说branch sensitive不能替代当前缺陷。",
              "checkpoint": "检查ComponentInput的fileId/nodeId/source/isValid/error形状，空白处理、123-456→123:456，以及abcdefghijkl:123:456和abcdefghijkl:123-456在当前compact实现均失败的转换事实。",
              "excerpts": [
                {
                  "label": "repo_figma_access.md:35",
                  "quote": "Figma URLs commonly encode node IDs as `123-456`; the API expects `123:456`. `validateAndConvertNodeId` performs that conversion and enforces a numeric pair."
                },
                {
                  "label": "repo_figma_access.md:123",
                  "quote": "- The combined `fileId:nodeId` branch is sensitive because both the separator and the API node ID use colons; add tests before expanding that format."
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:8",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L8"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:164",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L164"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:43",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L43"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "有服务缺token、numeric-pair约束和opt-in-frame概念；未展开fileId长度/字符、handler具体失败形状及现存compact缺陷。措辞仅称尝试/敏感分支，按缺失限制而非错误成功保证处理。",
              "checkpoint": "检查fileId为10-50位字母数字/横线/下划线、nodeId最终为数字:数字、错误返回isValid=false及现存compact缺陷；主handler缺token和不合法组件类型/FRAME opt-in的失败边界。",
              "excerpts": [
                {
                  "label": "repo_figma_access.md:41",
                  "quote": "`FigmaService` requires a non-empty access token and sends it as `X-Figma-Token` to `https://api.figma.com/v1`."
                },
                {
                  "label": "repo_figma_access.md:123",
                  "quote": "- The combined `fileId:nodeId` branch is sensitive because both the separator and the API node ID use colons; add tests before expanding that format."
                }
              ],
              "sources": [
                {
                  "label": "src/services/figma.ts:18",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/services/figma.ts#L18"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:130",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L130"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:107",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L107"
                },
                {
                  "label": "src/utils/figma-url-parser.ts:43",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L43"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "partial",
              "finding": "token→parse/fetch→extract/report流程大体准确，列出可reset共享样式库；但reset在parse前的关键状态次序及visual/context与Flutter code串行追加未展开。",
              "checkpoint": "检查handler顺序token guard→可选共享样式reset→parse/validate→Figma fetch→类型/variant处理→extract/report；可选visual context与Flutter code按源码串行追加，图文不虚构并行。",
              "excerpts": [
                {
                  "label": "repo_flutter_delivery.md:15",
                  "quote": "    Call[MCP tool call] --> Token{API key present}\n    Token -->|no| Error[Return text error]\n    Token -->|yes| Parse[Parse and validate input]\n    Parse --> Fetch[Fetch Figma nodes]\n    Fetch --> Analyze[Run domain extractor]"
                },
                {
                  "label": "repo_flutter_delivery.md:45",
                  "quote": "- Reset the singleton style library."
                }
              ],
              "sources": [
                {
                  "label": "src/tools/flutter/components/component-tool.ts:64",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L64"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:192",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L192"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "partial",
              "finding": "工具获取节点、extractor处理、report组装的跨模块链正确，没有把extractor画成网络调用者；但缺components/index导出桶到parser的具体连接，联合链未完整。",
              "checkpoint": "检查component-tool→components/index导出桶→utils/figma-url-parser，以及handler调用FigmaService.getNode取FigmaNode，再把节点交extractor和report helpers；不能把无网络extractor画成FigmaService调用者。",
              "excerpts": [
                {
                  "label": "repo_flutter_delivery.md:59",
                  "quote": "    Tool->>API: getNode"
                },
                {
                  "label": "repo_flutter_delivery.md:65",
                  "quote": "    Tool->>Extract: Analyze component\n    Extract-->>Tool: Analysis or style references"
                }
              ],
              "sources": [
                {
                  "label": "src/tools/flutter/components/component-tool.ts:5",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L5"
                },
                {
                  "label": "src/extractors/components/index.ts:64",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/extractors/components/index.ts#L64"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:95",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L95"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未发现前缀、显式缺失区、后缀及对应答案的封装补全任务；字段占位符或生成器placeholder不是这类样本。",
              "checkpoint": "完整Wiki查找已封装prefix+显式hole+suffix+匹配答案任务；现有代码或未来可生成样本不能代替现成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "yes",
              "finding": "提供明确123-456输入→123:456输出的文字对，且直接命名执行转换的validator，符合本行静态输入/预期标准；没有把未执行示例说成实跑。",
              "checkpoint": "在所选ID解析/主组件工具路径内查找至少一个具体输入及明确预期结果/断言，核对给出的关键预期；123-456→123:456文字对也可计入，但无效调用的成功响应算错误。",
              "excerpts": [
                {
                  "label": "repo_figma_access.md:35",
                  "quote": "Figma URLs commonly encode node IDs as `123-456`; the API expects `123:456`. `validateAndConvertNodeId` performs that conversion and enforces a numeric pair."
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:164",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L164"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未发现与具体示例和执行环境绑定的实际运行记录；构建/调试建议、期望返回和verified元数据不算实跑。",
              "checkpoint": "完整Wiki查找与例子和执行上下文绑定的实跑记录；构建命令、CI说明、verified标签和预期输出不是实跑证据。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "partial",
              "finding": "parser/service提供具体可用源码文件链接；主component handler仅指向src/tools/flutter目录及组件子目录，缺component-tool.ts定位，受检链来源不完整。",
              "checkpoint": "检查上述受检材料自身是否给出匹配源码文件/符号或行号；目录线索不足算partial，Sources指到不存在的.js源码文件与TS正确ESM import写法需区分。",
              "excerpts": [
                {
                  "label": "repo_figma_access.md:7",
                  "quote": "[src/utils/figma-url-parser.ts](../repo/src/utils/figma-url-parser.ts)"
                },
                {
                  "label": "repo_flutter_delivery.md:7",
                  "quote": "Primary sources: [src/tools/flutter](../repo/src/tools/flutter), especially the `components`, `screens`, `assets`, and `theme` directories."
                }
              ],
              "sources": [
                {
                  "label": "src/utils/figma-url-parser.ts:23",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/utils/figma-url-parser.ts#L23"
                },
                {
                  "label": "src/tools/flutter/components/component-tool.ts:63",
                  "url": "https://github.com/mhmzdev/figma-flutter-mcp/blob/5907212d028881341db054b404724e75fed710b6/src/tools/flutter/components/component-tool.ts#L63"
                }
              ],
              "correctionCase": null
            }
          }
        }
      }
    },
    {
      "name": "Lightbox2",
      "slug": "lokesh/lightbox2",
      "commit": "6bc87b6c246da1f24dcfcf52683286ad7e560cf3",
      "tools": {
        "local-skill": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "有 imageCountLabel 的作用说明，但没有该函数连续实现体；不能把 Mermaid 或可定位源码当作已提供代码上下文。",
              "checkpoint": "同一函数 imageCountLabel(currentImageNum,totalImages) 的连续实现体：读取 this.options.albumLabel，依次全局替换 %1/%2 并返回字符串；仅使用代码、签名或图不替代实现上下文。",
              "excerpts": [
                {
                  "label": "2.1-Singleton Initialization and Options.md:21",
                  "quote": "The imageCountLabel helper applies the configured label template by replacing current and total placeholders."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "正确描述单例与浅合并，但未提供主要默认值的具体数值、有效 lightbox.option({...}) 调用及返回值说明；未见错误链接实例取法。",
              "checkpoint": "导出已创建的 lightbox 单例；option(options) 浅合并到当前 options、无显式返回值；核对主要默认值与有效单例调用，不能从链接 .data('lightbox') 取得实例，也不是每个组创建新实例。",
              "excerpts": [
                {
                  "label": "4.2-Behavioral Configuration Surface.md:27",
                  "quote": "Since option performs a shallow merge into persistent singleton state, later calls update selected settings while preserving earlier overrides."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:43",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L43"
                },
                {
                  "label": "src/js/lightbox.js:67",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L67"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "partial",
              "finding": "链接字段、同标签同 data-lightbox 分组及 legacy rel 单图规则正确；label 只说替换占位符，未覆盖全局替换细节和完整字段化示例。",
              "checkpoint": "触发链接转为 album 的 {alt,link,title}，分别读取 data-alt/href/data-title||title；无嵌套 img.alt 回退。同标签和同 data-lightbox 值组成一组，只有 legacy rel='lightbox' 是特殊单图；label 的两次全局替换。",
              "excerpts": [
                {
                  "label": "2.3-Album Assembly and Selection.md:15",
                  "quote": "If the selected element has data-lightbox, the runtime queries elements of the same tag name carrying the same value and preserves their document order."
                },
                {
                  "label": "3.4-Caption Rendering and Content Safety.md:9",
                  "quote": "Album entries obtain caption content from data-title first and fall back to the standard title attribute. Alternative text is captured separately from data-alt and is assigned to the visible image when its source changes."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:224",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L224"
                },
                {
                  "label": "src/js/lightbox.js:236",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L236"
                },
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "sanitizeTitle 的 text/HTML 分支正确；只描述成功 onload 流程，未揭示坏图/加载不返回时 loader、animating 与键盘未恢复的边界。",
              "checkpoint": "sanitizeTitle=true 走 .text、false 走 .html；changeImage 仅有 onload，无 onerror/加载超时，失败可停在 loader/animating 且键盘导航未恢复，不能把理想加载流程视为失败保障。",
              "excerpts": [
                {
                  "label": "3.4-Caption Rendering and Content Safety.md:15",
                  "quote": "When sanitizeTitle is false, captions are inserted as HTML so trusted markup such as links can remain interactive. When it is true, the same value is inserted as text, preventing tags from being interpreted."
                },
                {
                  "label": "2.4-Image Loading and Geometry.md:9",
                  "quote": "It creates a browser Image object and waits for its load callback before updating the visible image's source, alternative text, width, and height."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:284",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L284"
                },
                {
                  "label": "src/js/lightbox.js:434",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L434"
                },
                {
                  "label": "ROADMAP.md:50",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/ROADMAP.md#L50"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "partial",
              "finding": "不重复创建遮罩层的说明正确。若要理解重复初始化的完整过程，还缺少事件会重复绑定的说明，因此本能力记为部分。",
              "checkpoint": "DOM-ready 后 enable→build；build 的 DOM 防重不等于重复 init 安全。键盘监听在两个组件根而非 document；end 解绑并隐藏但保留 DOM。start 先调用 sizeOverlay，实际测量经 setTimeout(0) 在滚动类之后；preloader.src 先于 currentImageIndex 赋值。",
              "excerpts": [
                {
                  "label": "2.2-Generated Overlay DOM and Handlers.md:9",
                  "quote": "This makes setup idempotent and prevents multiple overlays when the module is evaluated or initialized more than once."
                },
                {
                  "label": "3.1-Overlay Layering and Scroll Lock.md:15",
                  "quote": "It defers measurement with a zero-delay timer so an enabled scroll lock can hide the scrollbar before document dimensions are read."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:75",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L75"
                },
                {
                  "label": "src/js/lightbox.js:86",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L86"
                },
                {
                  "label": "src/js/lightbox.js:383",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L383"
                }
              ],
              "correctionCase": "lightbox-reinit"
            },
            "F": {
              "status": "yes",
              "finding": "说明链接属性进入 album、JS/CSS 滚动类联动，以及 src→dist 复制、拼接和压缩的实际方向；不是只列目录。",
              "checkpoint": "examples 标记经 src/js/lightbox.js 收集 album 并呈现；JS 的 lb-disable-scrolling 与 src/css/lightbox.css 的 overflow:hidden 对应；Grunt 把 src 复制到 dist，再拼接/压缩，检验真实跨文件转换而非目录列表。",
              "excerpts": [
                {
                  "label": "2.3-Album Assembly and Selection.md:9",
                  "quote": "A small helper converts each matching element into an object containing the full-size image URL from href, alternative text from data-alt, and caption content from data-title or title."
                },
                {
                  "label": "3.1-Overlay Layering and Scroll Lock.md:21",
                  "quote": "When disableScrolling is enabled, opening adds a body class whose only responsibility is setting overflow to hidden."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:224",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L224"
                },
                {
                  "label": "src/js/lightbox.js:269",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L269"
                },
                {
                  "label": "src/css/lightbox.css:1",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/css/lightbox.css#L1"
                },
                {
                  "label": "Gruntfile.js:18",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/Gruntfile.js#L18"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到已打包的前缀/缺口/后缀/答案上下文补全任务。",
              "checkpoint": "原 Wiki 已打包的上下文补全对象：前缀、明确缺口、后缀及匹配答案，不能把可裁切源码当现成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "叙述两独立图片、四图同组及导航规则，但没有把具体触发输入与单图隐藏导航/计数、多图显示计数的预期组成明确测试对。",
              "checkpoint": "同一单图/同组画廊机制的具体输入与预期：独立 data-lightbox 值各形成单图，无前后导航/计数；共享值形成可导航多图并按默认配置显示计数。参考例为 example-1/example-2 与四个 example-set。",
              "excerpts": [
                {
                  "label": "4.1-Declarative Consumer Markup.md:21",
                  "quote": "The example page demonstrates two standalone images and four links sharing one group name."
                },
                {
                  "label": "3.4-Caption Rendering and Content Safety.md:21",
                  "quote": "The label is hidden for a single item or when showImageNumberLabel is disabled."
                }
              ],
              "sources": [
                {
                  "label": "examples/index.html:13",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/examples/index.html#L13"
                },
                {
                  "label": "src/js/lightbox.js:457",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L457"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "只有 Grunt 静态检查与浏览器手工验证流程，没有与具体样例绑定的实际执行结果。",
              "checkpoint": "与具体 Lightbox 样例和执行环境绑定的实际运行结果；手工检查建议、Grunt 流程图和推断行为不算运行记录。",
              "excerpts": [
                {
                  "label": "4.4-Grunt Artifact Pipeline.md:9",
                  "quote": "The test task runs these checks without producing files."
                }
              ],
              "sources": [
                {
                  "label": "Gruntfile.js:81",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/Gruntfile.js#L81"
                }
              ],
              "correctionCase": null
            },
            "J": {
              "status": "partial",
              "finding": "原 Wiki 架构图给出源码文件名、正文给出方法名，但23页没有论点级源码行号/链接；可缩小文件，不能直接追到该函数或边界证据。",
              "checkpoint": "被检查事实能否沿 Wiki 自有文件、符号或行号指针定位到匹配源实现；空 href 的明确文本区间仍可用，不是整篇引用完整率。",
              "excerpts": [
                {
                  "label": "1-Project Overview.md:26",
                  "quote": "  SourceJS[src/js/lightbox.js] --> Build[Grunt tasks]"
                },
                {
                  "label": "2.1-Singleton Initialization and Options.md:21",
                  "quote": "The imageCountLabel helper applies the configured label template by replacing current and total placeholders."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "devinwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "yes",
              "finding": "提供完整 imageCountLabel 函数体，两次全局替换和返回值与源码一致。",
              "checkpoint": "同一函数 imageCountLabel(currentImageNum,totalImages) 的连续实现体：读取 this.options.albumLabel，依次全局替换 %1/%2 并返回字符串；仅使用代码、签名或图不替代实现上下文。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {\n  return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);\n};"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "保留正确 lightbox.option 示例、默认值和浅合并实现，但又把链接 .data('lightbox') 当实例取出再调用 option；实际它是分组属性数据。另称不同组创建独立实例，违背单例导出。",
              "checkpoint": "导出已创建的 lightbox 单例；option(options) 浅合并到当前 options、无显式返回值；核对主要默认值与有效单例调用，不能从链接 .data('lightbox') 取得实例，也不是每个组创建新实例。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "var lb = $('.example-link').data('lightbox');"
                },
                {
                  "label": "wiki.json",
                  "quote": "lb.option({"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:67",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L67"
                },
                {
                  "label": "src/js/lightbox.js:233",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L233"
                },
                {
                  "label": "src/js/lightbox.js:570",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L570"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "fix",
              "finding": "label完整替换及分组主流程有正确材料；data-alt 表却虚构未提供时回退 img.alt，实际 album.alt 只取触发链接的 data-alt。",
              "checkpoint": "触发链接转为 album 的 {alt,link,title}，分别读取 data-alt/href/data-title||title；无嵌套 img.alt 回退。同标签和同 data-lightbox 值组成一组，只有 legacy rel='lightbox' 是特殊单图；label 的两次全局替换。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "| data-alt | Alternative text for the full-size image (falls back to img alt if not provided) | `data-alt=\"Descriptive text\"` |"
                },
                {
                  "label": "wiki.json",
                  "quote": "  return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:224",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L224"
                },
                {
                  "label": "src/js/lightbox.js:236",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L236"
                },
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "sanitizeTitle 的 text/HTML 条件与源码一致；加载流程只有成功路径，未说明 onerror/超时缺失导致的卡住状态。",
              "checkpoint": "sanitizeTitle=true 走 .text、false 走 .html；changeImage 仅有 onload，无 onerror/加载超时，失败可停在 loader/animating 且键盘导航未恢复，不能把理想加载流程视为失败保障。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "- **Description**: When `true`, HTML in the image title (used for captions) is treated as plain text to prevent XSS. When `false`, HTML is allowed, enabling formatting and links in captions."
                },
                {
                  "label": "wiki.json",
                  "quote": "    Image-->>LB: Image loaded"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:486",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L486"
                },
                {
                  "label": "src/js/lightbox.js:284",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L284"
                },
                {
                  "label": "ROADMAP.md:50",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/ROADMAP.md#L50"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "正确画出 DOM-ready 后 enable/build，但事件图把键盘监听画在 Document，且示例流程说关闭会删除 overlay；源码只绑定两个组件根，关闭后 DOM 保留。",
              "checkpoint": "DOM-ready 后 enable→build；build 的 DOM 防重不等于重复 init 安全。键盘监听在两个组件根而非 document；end 解绑并隐藏但保留 DOM。start 先调用 sizeOverlay，实际测量经 setTimeout(0) 在滚动类之后；preloader.src 先于 currentImageIndex 赋值。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "        K[\"Document\"] -->|\"keyup\"| L[\"Keyboard Navigation\"]"
                },
                {
                  "label": "wiki.json",
                  "quote": "    Lightbox->>Browser: Removes overlay elements"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:103",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L103"
                },
                {
                  "label": "src/js/lightbox.js:523",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L523"
                },
                {
                  "label": "src/js/lightbox.js:559",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L559"
                },
                {
                  "label": "src/js/lightbox.js:75",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L75"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "有正确 JS/CSS 滚动类和 Grunt 复制构建链；但 HTML→album 的 alt 数据流写成对子 img.alt 的回退，所选跨文件转换并不成立。",
              "checkpoint": "examples 标记经 src/js/lightbox.js 收集 album 并呈现；JS 的 lb-disable-scrolling 与 src/css/lightbox.css 的 overflow:hidden 对应；Grunt 把 src 复制到 dist，再拼接/压缩，检验真实跨文件转换而非目录列表。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "| data-alt | Alternative text for the full-size image (falls back to img alt if not provided) | `data-alt=\"Descriptive text\"` |"
                },
                {
                  "label": "wiki.json",
                  "quote": "body.lb-disable-scrolling {\n  overflow: hidden;\n}"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:224",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L224"
                },
                {
                  "label": "src/css/lightbox.css:1",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/css/lightbox.css#L1"
                },
                {
                  "label": "Gruntfile.js:18",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/Gruntfile.js#L18"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到前缀、明确缺口、后缀和答案组合的成套补全题。",
              "checkpoint": "原 Wiki 已打包的上下文补全对象：前缀、明确缺口、后缀及匹配答案，不能把可裁切源码当现成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "提供单图HTML及点击后显示图像、同组HTML及可导航的明确预期；但同一检点要求的单图无导航/计数与多图默认计数预期未成套覆盖。",
              "checkpoint": "同一单图/同组画廊机制的具体输入与预期：独立 data-lightbox 值各形成单图，无前后导航/计数；共享值形成可导航多图并按默认配置显示计数。参考例为 example-1/example-2 与四个 example-set。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "<a href=\"path/to/image.jpg\" data-lightbox=\"image-1\" data-title=\"Optional caption\">"
                },
                {
                  "label": "wiki.json",
                  "quote": "When clicked, this will display `image.jpg` in the lightbox overlay with an optional caption."
                }
              ],
              "sources": [
                {
                  "label": "examples/index.html:13",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/examples/index.html#L13"
                },
                {
                  "label": "src/js/lightbox.js:457",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L457"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "开发页只有要求运行 grunt test/浏览器检查，没有样例执行环境与实际结果记录。",
              "checkpoint": "与具体 Lightbox 样例和执行环境绑定的实际运行结果；手工检查建议、Grunt 流程图和推断行为不算运行记录。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "Before submitting changes, ensure they pass all code quality checks:"
                }
              ],
              "sources": [
                {
                  "label": "Gruntfile.js:81",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/Gruntfile.js#L81"
                }
              ],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "所选函数和事件事实具有可复核的文本文件/行号指针；空Markdown href不抹除其明确定位信息。错误语义另在B/C/E/F记录，不把可查出错误等同无引用。",
              "checkpoint": "被检查事实能否沿 Wiki 自有文件、符号或行号指针定位到匹配源实现；空 href 的明确文本区间仍可用，不是整篇引用完整率。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "Sources: [src/js/lightbox.js:43](), [src/js/lightbox.js:71-73](), [src/js/lightbox.js:498]()"
                },
                {
                  "label": "wiki.json",
                  "quote": "Sources: [src/js/lightbox.js:86-91](), [src/js/lightbox.js:139-209](), [src/js/lightbox.js:523-556]()"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                },
                {
                  "label": "src/js/lightbox.js:523",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L523"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "deepwiki-open": {
          "available": true,
          "cells": {
            "A": {
              "status": "yes",
              "finding": "同一 imageCountLabel 实现体连续、完整，global replace 与 return 均正确；其他章节的错误不会抹除这一局部实现素材。",
              "checkpoint": "同一函数 imageCountLabel(currentImageNum,totalImages) 的连续实现体：读取 this.options.albumLabel，依次全局替换 %1/%2 并返回字符串；仅使用代码、签名或图不替代实现上下文。",
              "excerpts": [
                {
                  "label": "wiki.md:1867",
                  "quote": "Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {\n  return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);\n};"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "默认值、constructor 克隆和 option 浅合并实现正确；缺少展示公共单例 lightbox.option({...}) 的独立有效调用，不能把原型定义当用例。",
              "checkpoint": "导出已创建的 lightbox 单例；option(options) 浅合并到当前 options、无显式返回值；核对主要默认值与有效单例调用，不能从链接 .data('lightbox') 取得实例，也不是每个组创建新实例。",
              "excerpts": [
                {
                  "label": "wiki.md:1840",
                  "quote": "Lightbox.prototype.option = function(options) {\n  $.extend(this.options, options);\n};"
                },
                {
                  "label": "wiki.md:1847",
                  "quote": "The `$.extend` method from jQuery performs a shallow merge, so user-supplied options override the defaults on a per-property basis."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:43",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L43"
                },
                {
                  "label": "src/js/lightbox.js:67",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L67"
                },
                {
                  "label": "src/js/lightbox.js:570",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L570"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "fix",
              "finding": "label实现正确，但把 data-lightbox='lightbox' 误当特殊单图、把自定义 data-lightbox 分组写成查询 rel；摘录还去掉 addToAlbum 参数所需的jQuery包装，原转换不可照用。",
              "checkpoint": "触发链接转为 album 的 {alt,link,title}，分别读取 data-alt/href/data-title||title；无嵌套 img.alt 回退。同标签和同 data-lightbox 值组成一组，只有 legacy rel='lightbox' 是特殊单图；label 的两次全局替换。",
              "excerpts": [
                {
                  "label": "wiki.md:2217",
                  "quote": "1. **Individual images** — when the `data-lightbox` attribute value is `lightbox` (or the rel attribute is exactly `lightbox`), only the clicked link is added.\n2. **Image sets** — when the `data-lightbox` attribute has a custom group name, all elements sharing the same `rel` attribute value are collected into the album."
                },
                {
                  "label": "wiki.md:2205",
                  "quote": "    addToAlbum($links[j]);"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:233",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L233"
                },
                {
                  "label": "src/js/lightbox.js:245",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L245"
                },
                {
                  "label": "src/js/lightbox.js:252",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L252"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "说明 sanitizeTitle 对不可信caption的用途及成功预加载流程，但未覆盖无onerror/timeout造成的坏图停滞；不把成功路径本身视为错误承诺。",
              "checkpoint": "sanitizeTitle=true 走 .text、false 走 .html；changeImage 仅有 onload，无 onerror/加载超时，失败可停在 loader/animating 且键盘导航未恢复，不能把理想加载流程视为失败保障。",
              "excerpts": [
                {
                  "label": "wiki.md:1878",
                  "quote": "When captions come from untrusted sources (e.g., user-submitted content), setting this option to `true` prevents XSS and other injection attacks."
                },
                {
                  "label": "wiki.md:2311",
                  "quote": "The preloader's `onload` handler receives the natural width and height of the image, which are then passed to `sizeContainer()`."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:486",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L486"
                },
                {
                  "label": "src/js/lightbox.js:284",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L284"
                },
                {
                  "label": "ROADMAP.md:50",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/ROADMAP.md#L50"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "把 start() 画成调用 Build DOM 并说按需构建；实际 DOM-ready 的 init 才调用 build，start 只复用缓存DOM。其他章节对组件根键盘监听的说明保留为正确材料。",
              "checkpoint": "DOM-ready 后 enable→build；build 的 DOM 防重不等于重复 init 安全。键盘监听在两个组件根而非 document；end 解绑并隐藏但保留 DOM。start 先调用 sizeOverlay，实际测量经 setTimeout(0) 在滚动类之后；preloader.src 先于 currentImageIndex 赋值。",
              "excerpts": [
                {
                  "label": "wiki.md:1239",
                  "quote": "    C --> D[Build DOM]"
                },
                {
                  "label": "wiki.md:1250",
                  "quote": "A user click on a lightbox-enabled element triggers the `start()` method, which builds the DOM if necessary, loads the image, and displays it."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:75",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L75"
                },
                {
                  "label": "src/js/lightbox.js:213",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L213"
                },
                {
                  "label": "src/js/lightbox.js:559",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L559"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "源到dist的复制/拼接/压缩方向正确；但所选HTML属性→album的跨文件数据流把data-lightbox错接到rel分组，影响由example-set标记驱动的画廊理解。",
              "checkpoint": "examples 标记经 src/js/lightbox.js 收集 album 并呈现；JS 的 lb-disable-scrolling 与 src/css/lightbox.css 的 overflow:hidden 对应；Grunt 把 src 复制到 dist，再拼接/压缩，检验真实跨文件转换而非目录列表。",
              "excerpts": [
                {
                  "label": "wiki.md:2217",
                  "quote": "1. **Individual images** — when the `data-lightbox` attribute value is `lightbox` (or the rel attribute is exactly `lightbox`), only the clicked link is added.\n2. **Image sets** — when the `data-lightbox` attribute has a custom group name, all elements sharing the same `rel` attribute value are collected into the album."
                },
                {
                  "label": "wiki.md:2410",
                  "quote": "The `copy:dist` task copies everything from `src/` to `dist/`, including the CSS file. The `cssmin` task minifies `dist/css/lightbox.css` to `dist/css/lightbox.min.css`."
                }
              ],
              "sources": [
                {
                  "label": "examples/index.html:21",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/examples/index.html#L21"
                },
                {
                  "label": "src/js/lightbox.js:236",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L236"
                },
                {
                  "label": "Gruntfile.js:18",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/Gruntfile.js#L18"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "有省略号摘录，但没有显式缺口、前后缀和答案包装为一个补全任务。",
              "checkpoint": "原 Wiki 已打包的上下文补全对象：前缀、明确缺口、后缀及匹配答案，不能把可裁切源码当现成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "保留原examples的独立值/四图同组标记及导航提示，但没有完整给出这组输入对应的单图隐藏导航/计数、多图计数预期；不以其它函数体或lint流程替代。",
              "checkpoint": "同一单图/同组画廊机制的具体输入与预期：独立 data-lightbox 值各形成单图，无前后导航/计数；共享值形成可导航多图并按默认配置显示计数。参考例为 example-1/example-2 与四个 example-set。",
              "excerpts": [
                {
                  "label": "wiki.md:2920",
                  "quote": "A four-image set uses the same `data-lightbox` value to group them:"
                },
                {
                  "label": "wiki.md:2923",
                  "quote": "<a class=\"example-image-link\" href=\"http://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg\" data-lightbox=\"example-set\" data-title=\"Click the right half of the image to move forward.\"><img class=\"example-image\" src=\"http://lokeshdhakar.com/projects/lightbox2/images/thumb-3.jpg\" alt=\"\"/></a>"
                }
              ],
              "sources": [
                {
                  "label": "examples/index.html:13",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/examples/index.html#L13"
                },
                {
                  "label": "src/js/lightbox.js:457",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L457"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "Grunt test定义、Pass/Fail时序图均是工作流说明，不是指定样例已执行的记录。",
              "checkpoint": "与具体 Lightbox 样例和执行环境绑定的实际运行结果；手工检查建议、Grunt 流程图和推断行为不算运行记录。",
              "excerpts": [
                {
                  "label": "wiki.md:3190",
                  "quote": "grunt.registerTask('test', ['jshint', 'jscs']);"
                },
                {
                  "label": "wiki.md:3219",
                  "quote": "    JSHint-->>Grunt: Pass/Fail"
                }
              ],
              "sources": [
                {
                  "label": "Gruntfile.js:81",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/Gruntfile.js#L81"
                }
              ],
              "correctionCase": null
            },
            "J": {
              "status": "fix",
              "finding": "所选imageCountLabel的引用明确指向67–69行，但该区间实际是option而非71–73行的label；另一处又指68–70。仍有可用文件名和部分正确区间，不能称完全无证据。",
              "checkpoint": "被检查事实能否沿 Wiki 自有文件、符号或行号指针定位到匹配源实现；空 href 的明确文本区间仍可用，不是整篇引用完整率。",
              "excerpts": [
                {
                  "label": "wiki.md:1872",
                  "quote": "Sources: [src/js/lightbox.js:67-69]()"
                },
                {
                  "label": "wiki.md:3455",
                  "quote": "Sources: [src/js/lightbox.js:68-70]()"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:67",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L67"
                },
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "openwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "yes",
              "finding": "完整引用同一 imageCountLabel 函数体，并解释两次 /g 全量替换，局部上下文与源码一致。",
              "checkpoint": "同一函数 imageCountLabel(currentImageNum,totalImages) 的连续实现体：读取 this.options.albumLabel，依次全局替换 %1/%2 并返回字符串；仅使用代码、签名或图不替代实现上下文。",
              "excerpts": [
                {
                  "label": "user-options.md:117",
                  "quote": "Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {\n  return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);\n};"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "正确说明单例、默认值和 live options 的浅合并，但未展示公共单例的独立调用样例，也没有清楚交代 option 的返回值；只有API说明不等于完整调用素材。",
              "checkpoint": "导出已创建的 lightbox 单例；option(options) 浅合并到当前 options、无显式返回值；核对主要默认值与有效单例调用，不能从链接 .data('lightbox') 取得实例，也不是每个组创建新实例。",
              "excerpts": [
                {
                  "label": "user-options.md:81",
                  "quote": "`Lightbox.prototype.option(options)` applies a caller-supplied object on top of\nthe current options with `$.extend(this.options, options)`"
                },
                {
                  "label": "user-options.md:75",
                  "quote": "The module is a singleton (the UMD wrapper ends with `return new Lightbox();`),"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:43",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L43"
                },
                {
                  "label": "src/js/lightbox.js:67",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L67"
                },
                {
                  "label": "src/js/lightbox.js:570",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L570"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "yes",
              "finding": "album字段来源、caption优先级、同tag同data-lightbox和legacy rel区分均正确；label明确两次全局替换及index+1，无img.alt回退主张。",
              "checkpoint": "触发链接转为 album 的 {alt,link,title}，分别读取 data-alt/href/data-title||title；无嵌套 img.alt 回退。同标签和同 data-lightbox 值组成一组，只有 legacy rel='lightbox' 是特殊单图；label 的两次全局替换。",
              "excerpts": [
                {
                  "label": "module-loading.md:191",
                  "quote": "album entry the values read are `href` (the image `link`), `data-alt` (the\n`alt`), and `data-title` or `title` for the caption"
                },
                {
                  "label": "runtime-lifecycle.md:129",
                  "quote": "   - If `data-lightbox` is present: select every element of the same tag name\n     with an equal `data-lightbox` value, add each to the album, and record the"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:224",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L224"
                },
                {
                  "label": "src/js/lightbox.js:236",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L236"
                },
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "sanitizeTitle的两个真实分支有源码引用；加载章节仅讲onload，漏掉无onerror/timeout后的卡住状态。",
              "checkpoint": "sanitizeTitle=true 走 .text、false 走 .html；changeImage 仅有 onload，无 onerror/加载超时，失败可停在 loader/animating 且键盘导航未恢复，不能把理想加载流程视为失败保障。",
              "excerpts": [
                {
                  "label": "user-options.md:152",
                  "quote": "if (this.options.sanitizeTitle) {\n  $caption.text(this.album[this.currentImageIndex].title);\n} else {\n  $caption.html(this.album[this.currentImageIndex].title);\n}"
                },
                {
                  "label": "runtime-lifecycle.md:157",
                  "quote": "- Creates an `Image` preloader. On `load`, it sets the `.lb-image` `src` and\n  `alt`, then computes fitted dimensions."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:486",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L486"
                },
                {
                  "label": "src/js/lightbox.js:284",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L284"
                },
                {
                  "label": "ROADMAP.md:50",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/ROADMAP.md#L50"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "把 currentImageIndex 的写入放在 preloader.src 之前，源码实际相反。DOM-ready、组件根键盘和保留DOM的cleanup叙述正确；“滚动类在实际测量前生效”也正确，因sizeOverlay内部setTimeout(0)，不列错误。",
              "checkpoint": "DOM-ready 后 enable→build；build 的 DOM 防重不等于重复 init 安全。键盘监听在两个组件根而非 document；end 解绑并隐藏但保留 DOM。start 先调用 sizeOverlay，实际测量经 setTimeout(0) 在滚动类之后；preloader.src 先于 currentImageIndex 赋值。",
              "excerpts": [
                {
                  "label": "runtime-lifecycle.md:179",
                  "quote": "The `preloader.src` assignment both starts the download and is what makes the\nimage \"preloaded before showing\"; `currentImageIndex` is recorded before that\nline."
                },
                {
                  "label": "user-options.md:204",
                  "quote": "  class is applied before `sizeOverlay()` measures, so the hidden scrollbar does\n  not skew the overlay size."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:378",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L378"
                },
                {
                  "label": "src/js/lightbox.js:383",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L383"
                },
                {
                  "label": "src/js/lightbox.js:75",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L75"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "yes",
              "finding": "HTML属性进入album、JS滚动类对CSS overflow:hidden、src→dist复制与后续bundle/minify的数据/构建流均有具体描述。",
              "checkpoint": "examples 标记经 src/js/lightbox.js 收集 album 并呈现；JS 的 lb-disable-scrolling 与 src/css/lightbox.css 的 overflow:hidden 对应；Grunt 把 src 复制到 dist，再拼接/压缩，检验真实跨文件转换而非目录列表。",
              "excerpts": [
                {
                  "label": "module-loading.md:191",
                  "quote": "album entry the values read are `href` (the image `link`), `data-alt` (the\n`alt`), and `data-title` or `title` for the caption"
                },
                {
                  "label": "runtime-lifecycle.md:145",
                  "quote": "5. If `disableScrolling` is set, adds `lb-disable-scrolling` to the body, which\n   the CSS styles with `overflow: hidden`."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:224",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L224"
                },
                {
                  "label": "src/css/lightbox.css:1",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/css/lightbox.css#L1"
                },
                {
                  "label": "Gruntfile.js:18",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/Gruntfile.js#L18"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到前缀/明确缺口/后缀/答案成套对象；完整函数和省略签名不能当作补全任务。",
              "checkpoint": "原 Wiki 已打包的上下文补全对象：前缀、明确缺口、后缀及匹配答案，不能把可裁切源码当现成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "yes",
              "finding": "手工测试页把独立example-1/example-2与四个example-set输入，和单图隐藏导航、多图导航/默认计数预期明确配对；无需执行也符合H。",
              "checkpoint": "同一单图/同组画廊机制的具体输入与预期：独立 data-lightbox 值各形成单图，无前后导航/计数；共享值形成可导航多图并按默认配置显示计数。参考例为 example-1/example-2 与四个 example-set。",
              "excerpts": [
                {
                  "label": "validation.md:192",
                  "quote": "The first section, **Two Individual Images**, uses distinct `data-lightbox`\nvalues (`example-1`, `example-2`), so each anchor is its own one-image \"set\"."
                },
                {
                  "label": "validation.md:203",
                  "quote": "- A unique `data-lightbox` value produces an `album` of length 1, and the\n  prev/next navigation is hidden (`updateNav`, `src/js/lightbox.js#L457-L477`).\n- A shared value pulls all matching anchors into one set; the image-number\n  label (`Image %1 of %2`) and prev/next navigation appear, since\n  `album.length > 1` and `showImageNumberLabel` defaults to `true`"
                }
              ],
              "sources": [
                {
                  "label": "examples/index.html:13",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/examples/index.html#L13"
                },
                {
                  "label": "src/js/lightbox.js:457",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L457"
                },
                {
                  "label": "src/js/lightbox.js:497",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L497"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "明确承认验证只有lint；所列手工浏览器步骤与推断预期不构成实际执行记录。",
              "checkpoint": "与具体 Lightbox 样例和执行环境绑定的实际运行结果；手工检查建议、Grunt 流程图和推断行为不算运行记录。",
              "excerpts": [
                {
                  "label": "validation.md:265",
                  "quote": "Because validation is lint-only, it never proves runtime correctness."
                }
              ],
              "sources": [
                {
                  "label": "Gruntfile.js:81",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/Gruntfile.js#L81"
                }
              ],
              "correctionCase": null
            },
            "J": {
              "status": "partial",
              "finding": "核心label/album/loader指针可直接复核；testing收尾段仍有repo/src畸形相对链接，定位不完整。按本次取证范围保留有效引用，不按全篇坏链比例打分。",
              "checkpoint": "被检查事实能否沿 Wiki 自有文件、符号或行号指针定位到匹配源实现；空 href 的明确文本区间仍可用，不是整篇引用完整率。",
              "excerpts": [
                {
                  "label": "user-options.md:122",
                  "quote": "([`src/js/lightbox.js#L71-L73`](repo://src/js/lightbox.js#L71-L73))"
                },
                {
                  "label": "validation.md:256",
                  "quote": "([`src/js/lightbox.js#L139-L149`](repo/src/js/lightbox.js#L139-L149),"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                },
                {
                  "label": "src/js/lightbox.js:139",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L139"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "codewiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "选定imageCountLabel仅出现在默认项/用途说明中，没有其实现体；不能把lightbox.option用例或另一个jQuery算法代替它。",
              "checkpoint": "同一函数 imageCountLabel(currentImageNum,totalImages) 的连续实现体：读取 this.options.albumLabel，依次全局替换 %1/%2 并返回字符串；仅使用代码、签名或图不替代实现上下文。",
              "excerpts": [
                {
                  "label": "repo_lightbox_runtime.md:69",
                  "quote": "| `albumLabel` | `Image %1 of %2` | Template used by `imageCountLabel`. |"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "明确导出单例并给出有效option配置与默认值；但未交代浅合并语义及无显式返回值，调用接口材料尚不完整。",
              "checkpoint": "导出已创建的 lightbox 单例；option(options) 浅合并到当前 options、无显式返回值；核对主要默认值与有效单例调用，不能从链接 .data('lightbox') 取得实例，也不是每个组创建新实例。",
              "excerpts": [
                {
                  "label": "repo_lightbox_runtime.md:55",
                  "quote": "The module returns `new Lightbox()` rather than the constructor. Consumers normally configure the singleton through its `option(options)` method."
                },
                {
                  "label": "repo_lightbox_runtime.md:58",
                  "quote": "lightbox.option({\n  resizeDuration: 300,\n  wrapAround: true,\n  sanitizeTitle: true\n});"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:43",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L43"
                },
                {
                  "label": "src/js/lightbox.js:67",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L67"
                },
                {
                  "label": "src/js/lightbox.js:570",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L570"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "partial",
              "finding": "具体{alt,link,title}来源和caption回退正确，没有虚构img.alt回退；但同标签筛选及label两次全局替换未展开，不能以其它jQuery转换补足。",
              "checkpoint": "触发链接转为 album 的 {alt,link,title}，分别读取 data-alt/href/data-title||title；无嵌套 img.alt 回退。同标签和同 data-lightbox 值组成一组，只有 legacy rel='lightbox' 是特殊单图；label 的两次全局替换。",
              "excerpts": [
                {
                  "label": "overview.md:139",
                  "quote": "  alt: link.getAttribute('data-alt'),\n  link: link.getAttribute('href'),\n  title: link.getAttribute('data-title') || link.getAttribute('title')"
                },
                {
                  "label": "repo_lightbox_runtime.md:154",
                  "quote": "4. It selects all elements with the same `data-lightbox` value, or applies the legacy exact-`rel` grouping rules."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:224",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L224"
                },
                {
                  "label": "src/js/lightbox.js:236",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L236"
                },
                {
                  "label": "src/js/lightbox.js:71",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L71"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "yes",
              "finding": "同时明确sanitizeTitle的text/HTML分支和无onerror的真实坏图边界，指出loader/transition可能无限停留；该缺陷解释是已存在的可用材料。",
              "checkpoint": "sanitizeTitle=true 走 .text、false 走 .html；changeImage 仅有 onload，无 onerror/加载超时，失败可停在 loader/animating 且键盘导航未恢复，不能把理想加载流程视为失败保障。",
              "excerpts": [
                {
                  "label": "repo_lightbox_runtime.md:197",
                  "quote": "With `sanitizeTitle: false`, caption content is inserted with `.html()` and is therefore trusted markup. With `sanitizeTitle: true`, `.text()` prevents markup execution."
                },
                {
                  "label": "repo_lightbox_runtime.md:231",
                  "quote": "- `changeImage()` has an `onload` path but no explicit `onerror` path. A failed image can leave the loader and transition state visible indefinitely."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:486",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L486"
                },
                {
                  "label": "src/js/lightbox.js:284",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L284"
                },
                {
                  "label": "ROADMAP.md:50",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/ROADMAP.md#L50"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "partial",
              "finding": "正确将build幂等限定为DOM防重、描述初始化/键盘根节点和关闭流程；未说明重复init会再次enable，也未给src与currentImageIndex的具体先后，故不判完整覆盖。",
              "checkpoint": "DOM-ready 后 enable→build；build 的 DOM 防重不等于重复 init 安全。键盘监听在两个组件根而非 document；end 解绑并隐藏但保留 DOM。start 先调用 sizeOverlay，实际测量经 setTimeout(0) 在滚动类之后；preloader.src 先于 currentImageIndex 赋值。",
              "excerpts": [
                {
                  "label": "repo_lightbox_runtime.md:141",
                  "quote": "`init()` waits for the body to exist, then calls `enable()` and `build()`."
                },
                {
                  "label": "repo_lightbox_runtime.md:145",
                  "quote": "`build()` is idempotent: if `#lightbox` already exists, it returns."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:75",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L75"
                },
                {
                  "label": "src/js/lightbox.js:86",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L86"
                },
                {
                  "label": "src/js/lightbox.js:378",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L378"
                },
                {
                  "label": "src/js/lightbox.js:559",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L559"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "partial",
              "finding": "说明字段进入album、JS/CSS选择器契约及src复制和构建链；缺少所选滚动类到CSS overflow:hidden的具体联动解释，不拿其它尺寸计算替代该检点。",
              "checkpoint": "examples 标记经 src/js/lightbox.js 收集 album 并呈现；JS 的 lb-disable-scrolling 与 src/css/lightbox.css 的 overflow:hidden 对应；Grunt 把 src 复制到 dist，再拼接/压缩，检验真实跨文件转换而非目录列表。",
              "excerpts": [
                {
                  "label": "overview.md:139",
                  "quote": "  alt: link.getAttribute('data-alt'),\n  link: link.getAttribute('href'),\n  title: link.getAttribute('data-title') || link.getAttribute('title')"
                },
                {
                  "label": "repo_lightbox_runtime.md:209",
                  "quote": "`build()` generates stable IDs/classes that `src/css/lightbox.css` is expected to style:"
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:224",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L224"
                },
                {
                  "label": "src/js/lightbox.js:269",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L269"
                },
                {
                  "label": "src/css/lightbox.css:1",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/css/lightbox.css#L1"
                },
                {
                  "label": "Gruntfile.js:18",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/Gruntfile.js#L18"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "三个正式Wiki文件中未找到成套补全任务；没有把中间依赖图缓存或源代码库算入Wiki任务素材。",
              "checkpoint": "原 Wiki 已打包的上下文补全对象：前缀、明确缺口、后缀及匹配答案，不能把可裁切源码当现成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "只有建议在examples手工测试和重复打开/导航/关闭的说明，没有固定单图/同组输入及完整导航/计数预期对。",
              "checkpoint": "同一单图/同组画廊机制的具体输入与预期：独立 data-lightbox 值各形成单图，无前后导航/计数；共享值形成可导航多图并按默认配置显示计数。参考例为 example-1/example-2 与四个 example-set。",
              "excerpts": [
                {
                  "label": "overview.md:159",
                  "quote": "the example page can be used for manual browser testing."
                },
                {
                  "label": "overview.md:166",
                  "quote": "- Changes to focus, event namespaces, or animation queues are tested through repeated open, navigate, resize, and close cycles."
                }
              ],
              "sources": [
                {
                  "label": "examples/index.html:13",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/examples/index.html#L13"
                },
                {
                  "label": "src/js/lightbox.js:457",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L457"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "只有构建与手工验证建议，没有实际样例运行输出、执行环境或测试日志。",
              "checkpoint": "与具体 Lightbox 样例和执行环境绑定的实际运行结果；手工检查建议、Grunt 流程图和推断行为不算运行记录。",
              "excerpts": [
                {
                  "label": "overview.md:159",
                  "quote": "`grunt test` runs JSHint and JSCS against the authored JavaScript."
                }
              ],
              "sources": [
                {
                  "label": "Gruntfile.js:81",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/Gruntfile.js#L81"
                }
              ],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "Source References提供构造、加载、展示、键盘及关闭的匹配文件+起始行，可追溯本次所检查边界；无需超链接也成立。",
              "checkpoint": "被检查事实能否沿 Wiki 自有文件、符号或行号指针定位到匹配源实现；空 href 的明确文本区间仍可用，不是整篇引用完整率。",
              "excerpts": [
                {
                  "label": "repo_lightbox_runtime.md:240",
                  "quote": "- Loading and layout: `src/js/lightbox.js:277`, `src/js/lightbox.js:383`, `src/js/lightbox.js:402`, `src/js/lightbox.js:410`."
                },
                {
                  "label": "repo_lightbox_runtime.md:242",
                  "quote": "- Teardown and export: `src/js/lightbox.js:559`, `src/js/lightbox.js:570`."
                }
              ],
              "sources": [
                {
                  "label": "src/js/lightbox.js:277",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L277"
                },
                {
                  "label": "src/js/lightbox.js:559",
                  "url": "https://github.com/lokesh/lightbox2/blob/6bc87b6c246da1f24dcfcf52683286ad7e560cf3/src/js/lightbox.js#L559"
                }
              ],
              "correctionCase": null
            }
          }
        }
      }
    },
    {
      "name": "tcping",
      "slug": "cloverstd/tcping",
      "commit": "a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5",
      "tools": {
        "local-skill": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "只说utilities测试覆盖IPv4/IPv6规范化，没有选定FormatIP的连续实现体；不能替换成调度或其它函数的文字说明。",
              "checkpoint": "同一 FormatIP(IP string)(string,error) 连续实现体，含 strings.Trim(IP,\"[ ]\")、net.ParseIP/To4 判断、IPv6 加括号与无效输入返回；不以其他函数源码替代。",
              "excerpts": [
                {
                  "label": "3.3-Testing, Builds, and Release Automation.md:7",
                  "quote": "Utility tests use GoConvey to cover IPv4 and IPv6 normalization, invalid addresses, and duration/address parsing behavior."
                }
              ],
              "sources": [
                {
                  "label": "ping/utils.go:19",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils.go#L19"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "CLI端口覆盖、1s与包5s默认值差异和Ping(ctx)*Stats契约说明正确；但没有完整tcp.New签名/返回与具体调用实例，调用接口检点未齐。",
              "checkpoint": "CLI target/可选 port、缺省 tcp scheme、80/HTTPS443/URLport/第二参数覆盖及有效命令；CLI -T 默认1s与包默认5s区分；tcp.New(host,port,*Option,tls) 返回 *Ping，Ping(ctx) 返回 *Stats。",
              "excerpts": [
                {
                  "label": "1-Command-Line Usage and Configuration.md:3",
                  "quote": "The CLI chooses port 80 by default, changes the implicit port to 443 for HTTPS, honors a port embedded in the URL, and finally lets the second positional argument override every earlier choice."
                },
                {
                  "label": "1-Command-Line Usage and Configuration.md:24",
                  "quote": "The command default for timeout is `1s`, even though the lower-level package fallback is five seconds; normal CLI execution therefore supplies one second explicitly."
                }
              ],
              "sources": [
                {
                  "label": "main.go:68",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L68"
                },
                {
                  "label": "ping/tcp/tcp.go:16",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L16"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "partial",
              "finding": "提到IPv4/IPv6与非法地址测试，却没有FormatIP的'[ ]'清理、To4分支和错误返回规则；ParseDuration的正确说明不替代这一固定转换。",
              "checkpoint": "FormatIP 精确转换：去首尾字符集 '[ ]'，IPv4 裸返回，IPv6 括号返回，无效输入返回空串和错误；用同一组六个 valid/invalid/bracketed 输入校验，不换其它格式化主题。",
              "excerpts": [
                {
                  "label": "3.3-Testing, Builds, and Release Automation.md:7",
                  "quote": "Utility tests use GoConvey to cover IPv4 and IPv6 normalization, invalid addresses, and duration/address parsing behavior."
                }
              ],
              "sources": [
                {
                  "label": "ping/utils.go:19",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils.go#L19"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "fix",
              "finding": "明确说TCP/HTTP两种传输都遵守调用方timeout，遗漏首次TLS不接context导致该通则不成立；同时正确指出Summarize的total=0除零，并区分Result.Avg的零保护，保留这一正例。",
              "checkpoint": "TCP 首次 TLS DialWithDialer 不接派生 timeout context，dialer 也未配置 Timeout；普通 TCP 和 TLS 失败后的回退才用 DialContext。另核 Pinger.Summarize 在 total=0 时除零，不能与带零保护的 Result.Avg 混淆。",
              "excerpts": [
                {
                  "label": "3-Network Transports and Project Maintenance.md:3",
                  "quote": "Both honor a caller-supplied resolver and timeout and return the common statistics model, but their definitions of success and metadata differ."
                },
                {
                  "label": "2.3-Statistics, Formatting, and Error Semantics.md:57",
                  "quote": "The method assumes at least one attempt; dividing by zero is possible if it is called before any result is recorded."
                }
              ],
              "sources": [
                {
                  "label": "ping/tcp/tcp.go:22",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L22"
                },
                {
                  "label": "ping/tcp/tcp.go:63",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L63"
                },
                {
                  "label": "ping/ping.go:201",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L201"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "partial",
              "finding": "准确写出sync.Once关信号、signal/Done后Stop→Summarize，并说明取消结果仍可能更新统计；未明确Stop不是join、汇总可与logStats并发。未把这些正确的信号流程强判错误。",
              "checkpoint": "Stop 通过 sync.Once 关闭 stopC，只发停止信号，不 join；signal 后 CLI 立即 Summarize，Ping/logStats 可能尚在更新字段。自然计数完成与用户中断必须区分，不能宣称全部协程已停或统计天然并发安全。",
              "excerpts": [
                {
                  "label": "2.2-Probe Scheduling and Cancellation.md:46",
                  "quote": "`Stop` protects the close operation with `sync.Once`, allowing the run loop, command goroutine, or multiple callers to request shutdown safely without a double-close panic."
                },
                {
                  "label": "2.2-Probe Scheduling and Cancellation.md:54",
                  "quote": "In both cases it calls `Stop` and then prints the summary."
                }
              ],
              "sources": [
                {
                  "label": "main.go:134",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L134"
                },
                {
                  "label": "ping/ping.go:156",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L156"
                },
                {
                  "label": "ping/ping.go:189",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L189"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "partial",
              "finding": "正确说明工厂选择、transport返回Stats和累计方向；但本行共同检查点也包含主协程收尾链，未交代Stop没有等待后台完成及汇总可与统计更新并发，故为部分。不把正确的Stop后调用Summarize描述强判成错误等待保证。",
              "checkpoint": "main.go 注册/调用工厂→TCP Ping→Stats→Pinger/logStats→CLI Summarize 的真实跨文件调用与结果流；包括停止后报告时序，不能误称 Pinger 调用 CLI Summarize 或报告必为最后稳定输出。",
              "excerpts": [
                {
                  "label": "2-Core Ping Architecture.md:3",
                  "quote": "The main package registers TCP, HTTP, and HTTPS factories during initialization, then selects one after parsing the target scheme. This keeps command parsing independent from connection mechanics and lets all transports return the same `Stats` shape."
                },
                {
                  "label": "1.3-DNS, Proxy, and Signal Controls.md:52",
                  "quote": "It then calls `Stop`, which is idempotent through `sync.Once`, and prints the cumulative summary."
                }
              ],
              "sources": [
                {
                  "label": "main.go:123",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L123"
                },
                {
                  "label": "main.go:173",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L173"
                },
                {
                  "label": "ping/tcp/tcp.go:36",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L36"
                },
                {
                  "label": "ping/ping.go:189",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L189"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到已封装的前缀/缺口/后缀/答案补全对象。",
              "checkpoint": "原 Wiki 已打包的前缀、明确缺口、后缀和答案补全对象；散落源码或 //... 不算已成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "列出FormatIP相关测试类别与文件，没有固定六组具体输入/输出对；其它HTTP/TCP断言不能替代本行选择的utils用例。",
              "checkpoint": "固定使用 ping/utils_test.go 的六个 FormatIP 输入/明确预期：192.168.0.1、192.0.1、[192.0.1.1]尾空格、合法括号IPv6、截断IPv6、裸IPv6尾空格。文字表格也可，不要求实际执行。",
              "excerpts": [
                {
                  "label": "3.3-Testing, Builds, and Release Automation.md:7",
                  "quote": "Utility tests use GoConvey to cover IPv4 and IPv6 normalization, invalid addresses, and duration/address parsing behavior."
                }
              ],
              "sources": [
                {
                  "label": "ping/utils_test.go:13",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils_test.go#L13"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "描述Makefile/CI命令及测试覆盖，没有具体命令在特定环境的真实结果记录。",
              "checkpoint": "与具体 tcping 命令/测试和执行环境绑定的实际结果；README样式输出、源码测试、CI指令和推断结果不算实际执行记录。",
              "excerpts": [
                {
                  "label": "3.3-Testing, Builds, and Release Automation.md:25",
                  "quote": "The test target executes every package with verbose output, the race detector, and all benchmarks."
                }
              ],
              "sources": [
                {
                  "label": "Makefile:28",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/Makefile#L28"
                }
              ],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "本次端口、超时、停止与统计事实都有匹配文件和行号文本引用，可直接复核；这与引用支持的文字是否正确是独立维度。",
              "checkpoint": "沿 Wiki 自有文件+符号/行号定位本次所检查实现；保留有效文本指针，区分局部引用偏移与无产物。",
              "excerpts": [
                {
                  "label": "1.3-DNS, Proxy, and Signal Controls.md:52",
                  "quote": "[main.go#L123-140]() [ping/ping.go#L125-175]()"
                },
                {
                  "label": "2.3-Statistics, Formatting, and Error Semantics.md:57",
                  "quote": "[ping/ping.go#L201-210]()"
                }
              ],
              "sources": [
                {
                  "label": "main.go:131",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L131"
                },
                {
                  "label": "ping/ping.go:201",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L201"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "devinwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "FormatIP有用途、输入输出表和源指针，但没有完整连续实现体；不能用API图替代实现上下文。",
              "checkpoint": "同一 FormatIP(IP string)(string,error) 连续实现体，含 strings.Trim(IP,\"[ ]\")、net.ParseIP/To4 判断、IPv6 加括号与无效输入返回；不以其他函数源码替代。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "The `FormatIP` function in [ping/utils.go:19-31]() standardizes IP address representation, ensuring proper bracket notation for IPv6 addresses and consistent formatting for IPv4 addresses."
                }
              ],
              "sources": [
                {
                  "label": "ping/utils.go:19",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils.go#L19"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "CLI调用例及- T默认1s表正确，tcp.New/Ping契约亦有说明；Utilities图却把5s DefaultTimeout连到CLI Flag Defaults，与main实际硬编码1s矛盾。",
              "checkpoint": "CLI target/可选 port、缺省 tcp scheme、80/HTTPS443/URLport/第二参数覆盖及有效命令；CLI -T 默认1s与包默认5s区分；tcp.New(host,port,*Option,tls) 返回 *Ping，Ping(ctx) 返回 *Stats。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "- Simple TCP ping: `tcping google.com`"
                },
                {
                  "label": "wiki.json",
                  "quote": "| `--timeout` | `-T` | string | \"1s\" | Connection timeout duration |"
                }
              ],
              "sources": [
                {
                  "label": "main.go:182",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L182"
                },
                {
                  "label": "ping/constants.go:7",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/constants.go#L7"
                },
                {
                  "label": "ping/tcp/tcp.go:16",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L16"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "yes",
              "finding": "六个FormatIP例子明确展示裸IPv4、去括号/尾空格、括号IPv6、裸IPv6加括号与非法输入空串；Utilities同时交代ParseIP验证及错误返回，与源转换一致。",
              "checkpoint": "FormatIP 精确转换：去首尾字符集 '[ ]'，IPv4 裸返回，IPv6 括号返回，无效输入返回空串和错误；用同一组六个 valid/invalid/bracketed 输入校验，不换其它格式化主题。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "| Valid IPv4 | `\"192.168.0.1\"` | `\"192.168.0.1\"` | Standard IPv4 validation |\n| Invalid IPv4 | `\"192.0.1\"` | `\"\"` | Malformed address handling |\n| Formatted IPv4 | `\"[192.0.1.1] \"` | `\"192.0.1.1\"` | Bracket and whitespace cleanup |"
                },
                {
                  "label": "wiki.json",
                  "quote": "| Valid IPv6 | `\"[2002:ac1f:91c5:1::bd59]\"` | `\"[2002:ac1f:91c5:1::bd59]\"` | Bracketed IPv6 validation |\n| Invalid IPv6 | `\"2002:ac1f:91c5:1:\"` | `\"\"` | Malformed IPv6 handling |\n| Unbracketed IPv6 | `\"2002:ac1f:91c5:1::bd59 \"` | `\"[2002:ac1f:91c5:1::bd59]\"` | Auto-bracketing and cleanup |"
                }
              ],
              "sources": [
                {
                  "label": "ping/utils.go:19",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils.go#L19"
                },
                {
                  "label": "ping/utils_test.go:13",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils_test.go#L13"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "fix",
              "finding": "宣称两种protocol以context保证一致超时/取消语义，但TLS首次DialWithDialer不接ctx。未说明Summarize的零探测除零；正确的普通TCP/回退路径不能抵消通则错误。",
              "checkpoint": "TCP 首次 TLS DialWithDialer 不接派生 timeout context，dialer 也未配置 Timeout；普通 TCP 和 TLS 失败后的回退才用 DialContext。另核 Pinger.Summarize 在 total=0 时除零，不能与带零保护的 Result.Avg 混淆。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "Both protocol implementations use consistent timeout handling through Go's `context.Context` system:"
                },
                {
                  "label": "wiki.json",
                  "quote": "The timeout context is established at [ping/tcp/tcp.go:37-42]() and [ping/http/http.go:67-72]() in each implementation, ensuring consistent behavior across all protocols."
                }
              ],
              "sources": [
                {
                  "label": "ping/tcp/tcp.go:22",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L22"
                },
                {
                  "label": "ping/tcp/tcp.go:63",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L63"
                },
                {
                  "label": "ping/ping.go:201",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L201"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "架构图把计数完成/收到signal都置于停止循环之后再汇总的串行流程；实际signal时Stop只关通知，主协程不等Ping/logStats退出。保留CLI页正确显示Stop→Summarize的代码级顺序。",
              "checkpoint": "Stop 通过 sync.Once 关闭 stopC，只发停止信号，不 join；signal 后 CLI 立即 Summarize，Ping/logStats 可能尚在更新字段。自然计数完成与用户中断必须区分，不能宣称全部协程已停或统计天然并发安全。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "        alt \"Counter reached or signal received\"\n            Pinger->>Pinger: \"Stop ping loop\""
                },
                {
                  "label": "wiki.json",
                  "quote": "    Pinger->>CLI: \"Summarize()\"\n    CLI->>CLI: \"Print final statistics\""
                }
              ],
              "sources": [
                {
                  "label": "main.go:134",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L134"
                },
                {
                  "label": "ping/ping.go:156",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L156"
                },
                {
                  "label": "ping/ping.go:189",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L189"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "工厂和Stats返回链有正确材料，但架构时序图画成Pinger调用CLI的Summarize并在停止循环之后打印；真实调用方是main，signal路径无等候循环退出。",
              "checkpoint": "main.go 注册/调用工厂→TCP Ping→Stats→Pinger/logStats→CLI Summarize 的真实跨文件调用与结果流；包括停止后报告时序，不能误称 Pinger 调用 CLI Summarize 或报告必为最后稳定输出。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "        Protocol-->>Pinger: \"Return Stats struct\"\n        Pinger->>Pinger: \"logStats()\""
                },
                {
                  "label": "wiki.json",
                  "quote": "    Pinger->>CLI: \"Summarize()\"\n    CLI->>CLI: \"Print final statistics\""
                }
              ],
              "sources": [
                {
                  "label": "main.go:123",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L123"
                },
                {
                  "label": "main.go:140",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L140"
                },
                {
                  "label": "ping/ping.go:189",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L189"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "没有前缀/明确缺口/后缀/答案成套补全任务。",
              "checkpoint": "原 Wiki 已打包的前缀、明确缺口、后缀和答案补全对象；散落源码或 //... 不算已成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "yes",
              "finding": "Unit Tests给出同一组六个FormatIP输入及Expected Output，和源ShouldEqual断言逐一一致；文字表格本身符合H，不要求执行。",
              "checkpoint": "固定使用 ping/utils_test.go 的六个 FormatIP 输入/明确预期：192.168.0.1、192.0.1、[192.0.1.1]尾空格、合法括号IPv6、截断IPv6、裸IPv6尾空格。文字表格也可，不要求实际执行。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "| Valid IPv4 | `\"192.168.0.1\"` | `\"192.168.0.1\"` | Standard IPv4 validation |\n| Invalid IPv4 | `\"192.0.1\"` | `\"\"` | Malformed address handling |\n| Formatted IPv4 | `\"[192.0.1.1] \"` | `\"192.0.1.1\"` | Bracket and whitespace cleanup |"
                },
                {
                  "label": "wiki.json",
                  "quote": "| Valid IPv6 | `\"[2002:ac1f:91c5:1::bd59]\"` | `\"[2002:ac1f:91c5:1::bd59]\"` | Bracketed IPv6 validation |\n| Invalid IPv6 | `\"2002:ac1f:91c5:1:\"` | `\"\"` | Malformed IPv6 handling |\n| Unbracketed IPv6 | `\"2002:ac1f:91c5:1::bd59 \"` | `\"[2002:ac1f:91c5:1::bd59]\"` | Auto-bracketing and cleanup |"
                }
              ],
              "sources": [
                {
                  "label": "ping/utils_test.go:13",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils_test.go#L13"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "只有CI执行安排与测试解释，没有某次运行的环境、命令和实际结果记录。",
              "checkpoint": "与具体 tcping 命令/测试和执行环境绑定的实际结果；README样式输出、源码测试、CI指令和推断结果不算实际执行记录。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "Tests are automatically executed as part of the CI/CD pipeline defined in [.github/workflows/build.yaml:23-29]():"
                }
              ],
              "sources": [
                {
                  "label": ".github/workflows/build.yaml:23",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/.github/workflows/build.yaml#L23"
                }
              ],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "本次FormatIP/test、TCP超时和main生命周期均附可复核文本文件/行号；空href不等于失去定位。",
              "checkpoint": "沿 Wiki 自有文件+符号/行号定位本次所检查实现；保留有效文本指针，区分局部引用偏移与无产物。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "Sources: [ping/utils_test.go:9-42]()"
                },
                {
                  "label": "wiki.json",
                  "quote": "Sources: [ping/utils.go:19-31]()"
                }
              ],
              "sources": [
                {
                  "label": "ping/utils_test.go:9",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils_test.go#L9"
                },
                {
                  "label": "ping/utils.go:19",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils.go#L19"
                },
                {
                  "label": "main.go:131",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L131"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "deepwiki-open": {
          "available": true,
          "cells": {
            "A": {
              "status": "yes",
              "finding": "提供固定FormatIP函数的连续完整实现，输入清理、校验、IPv6分支和错误返回均吻合。",
              "checkpoint": "同一 FormatIP(IP string)(string,error) 连续实现体，含 strings.Trim(IP,\"[ ]\")、net.ParseIP/To4 判断、IPv6 加括号与无效输入返回；不以其他函数源码替代。",
              "excerpts": [
                {
                  "label": "wiki.md:1445",
                  "quote": "func FormatIP(IP string) (string, error) {\n    host := strings.Trim(IP, \"[ ]\")\n    if parseIP := net.ParseIP(host); parseIP != nil {\n        if parseIP.To4() == nil {\n            host = fmt.Sprintf(\"[%s]\", host)\n        }\n        return host, nil\n    }\n    return \"\", fmt.Errorf(\"error IP format\")\n}"
                }
              ],
              "sources": [
                {
                  "label": "ping/utils.go:19",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils.go#L19"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "有正确1s CLI表和端口处理代码，但另文把5s包常量说成main标志默认值；端口优先级文字又把URL port放在第二参数之前，与紧邻代码及源码相反。",
              "checkpoint": "CLI target/可选 port、缺省 tcp scheme、80/HTTPS443/URLport/第二参数覆盖及有效命令；CLI -T 默认1s与包默认5s区分；tcp.New(host,port,*Option,tls) 返回 *Ping，Ping(ctx) 返回 *Stats。",
              "excerpts": [
                {
                  "label": "wiki.md:3882",
                  "quote": "These defaults are used by `main.go` as flag defaults and by the protocol implementations when no explicit option is provided."
                },
                {
                  "label": "wiki.md:3992",
                  "quote": "The priority order is: explicit port in the URL, port from the second CLI argument, scheme default (443 for HTTPS, 80 otherwise)."
                }
              ],
              "sources": [
                {
                  "label": "main.go:68",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L68"
                },
                {
                  "label": "main.go:182",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L182"
                },
                {
                  "label": "ping/tcp/tcp.go:16",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L16"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "yes",
              "finding": "完整FormatIP代码明确去首尾'[ ]'字符、ParseIP校验、To4判断、IPv6加括号及无效空串+error，覆盖同一转换检点。",
              "checkpoint": "FormatIP 精确转换：去首尾字符集 '[ ]'，IPv4 裸返回，IPv6 括号返回，无效输入返回空串和错误；用同一组六个 valid/invalid/bracketed 输入校验，不换其它格式化主题。",
              "excerpts": [
                {
                  "label": "wiki.md:1445",
                  "quote": "func FormatIP(IP string) (string, error) {\n    host := strings.Trim(IP, \"[ ]\")\n    if parseIP := net.ParseIP(host); parseIP != nil {\n        if parseIP.To4() == nil {\n            host = fmt.Sprintf(\"[%s]\", host)\n        }\n        return host, nil\n    }\n    return \"\", fmt.Errorf(\"error IP format\")\n}"
                }
              ],
              "sources": [
                {
                  "label": "ping/utils.go:19",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils.go#L19"
                },
                {
                  "label": "ping/utils_test.go:13",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils_test.go#L13"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "普通TCP及TLS失败回退用context的说明有对应依据，但未披露首次TLS不接ctx，也未说明total=0汇总除零。按严格语义不把未限定的Timeout通则升级为“明确保证首次TLS受控”。",
              "checkpoint": "TCP 首次 TLS DialWithDialer 不接派生 timeout context，dialer 也未配置 Timeout；普通 TCP 和 TLS 失败后的回退才用 DialContext。另核 Pinger.Summarize 在 total=0 时除零，不能与带零保护的 Result.Avg 混淆。",
              "excerpts": [
                {
                  "label": "wiki.md:2788",
                  "quote": "1. **Timeout Configuration**: The method checks if a custom timeout is set in the option; otherwise, it defaults to `ping.DefaultTimeout` (5 seconds). A new context with this timeout is created."
                },
                {
                  "label": "wiki.md:2793",
                  "quote": "   - **TLS enabled**: Attempts `tls.DialWithDialer` first. If successful, uses the underlying `NetConn()`. If TLS fails, falls back to a plain TCP dial."
                }
              ],
              "sources": [
                {
                  "label": "ping/tcp/tcp.go:22",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L22"
                },
                {
                  "label": "ping/tcp/tcp.go:63",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L63"
                },
                {
                  "label": "ping/ping.go:201",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L201"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "把Pinger整体称为concurrency-safe，并称channels/sync.Once/context保证safe operation；实际sync.Once只保护close，signal路径的统计读写没有join或锁。保留文内准确的Stop/Done实现摘录。",
              "checkpoint": "Stop 通过 sync.Once 关闭 stopC，只发停止信号，不 join；signal 后 CLI 立即 Summarize，Ping/logStats 可能尚在更新字段。自然计数完成与用户中断必须区分，不能宣称全部协程已停或统计天然并发安全。",
              "excerpts": [
                {
                  "label": "wiki.md:2302",
                  "quote": "The `Pinger` is designed to be concurrency-safe, using a `sync.Once` for idempotent stop operations and a dedicated stop channel for signaling."
                },
                {
                  "label": "wiki.md:2635",
                  "quote": "The concurrency design using channels, `sync.Once`, and context cancellation ensures safe and graceful operation in both interactive and automated environments."
                }
              ],
              "sources": [
                {
                  "label": "main.go:134",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L134"
                },
                {
                  "label": "ping/ping.go:156",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L156"
                },
                {
                  "label": "ping/ping.go:201",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L201"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "主调/工厂/Stats链有正确内容，但signal时序图把Stop、Done回传、Pinger结束与Summarize画成完成屏障；实际Done只暴露stopC，main不等待Ping/logStats退出。报告章的After the ping loop completes仅作为正常结束背景，不单凭该句推导所有退出路径的保证。",
              "checkpoint": "main.go 注册/调用工厂→TCP Ping→Stats→Pinger/logStats→CLI Summarize 的真实跨文件调用与结果流；包括停止后报告时序，不能误称 Pinger 调用 CLI Summarize 或报告必为最后稳定输出。",
              "excerpts": [
                {
                  "label": "wiki.md:3966",
                  "quote": "The pipeline is modular, leveraging a factory pattern for protocol registration, a `Pinger` orchestrator for repeated execution, and protocol-specific implementations that produce `Stats` objects consumed by the central logging and summarization logic."
                },
                {
                  "label": "wiki.md:4544",
                  "quote": "After the ping loop completes, the `Summarize` method produces a final summary report."
                }
              ],
              "sources": [
                {
                  "label": "main.go:123",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L123"
                },
                {
                  "label": "main.go:134",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L134"
                },
                {
                  "label": "ping/ping.go:156",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L156"
                },
                {
                  "label": "ping/ping.go:189",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L189"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "源码中的//...是节略，不是给出前缀/缺口/后缀/答案的成套补全任务。",
              "checkpoint": "原 Wiki 已打包的前缀、明确缺口、后缀和答案补全对象；散落源码或 //... 不算已成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "有FormatIP实现和测试说明，但没有固定六组输入/明确输出对；TestPinger片段不替代所选utils测试。",
              "checkpoint": "固定使用 ping/utils_test.go 的六个 FormatIP 输入/明确预期：192.168.0.1、192.0.1、[192.0.1.1]尾空格、合法括号IPv6、截断IPv6、裸IPv6尾空格。文字表格也可，不要求实际执行。",
              "excerpts": [
                {
                  "label": "wiki.md:1442",
                  "quote": "The `FormatIP` utility normalizes IP addresses, adding brackets for IPv6:"
                },
                {
                  "label": "wiki.md:3886",
                  "quote": "The test files demonstrate the expected output format and behavior:"
                }
              ],
              "sources": [
                {
                  "label": "ping/utils_test.go:13",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils_test.go#L13"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "只有测试示例、输出模板及CI命令，没有可识别某次实际运行的命令/环境/结果组合。",
              "checkpoint": "与具体 tcping 命令/测试和执行环境绑定的实际结果；README样式输出、源码测试、CI指令和推断结果不算实际执行记录。",
              "excerpts": [
                {
                  "label": "wiki.md:2611",
                  "quote": "The test file `ping/ping_test.go` demonstrates the expected usage pattern with a mock `Ping` implementation:"
                }
              ],
              "sources": [
                {
                  "label": "ping/ping_test.go:21",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping_test.go#L21"
                }
              ],
              "correctionCase": null
            },
            "J": {
              "status": "fix",
              "finding": "Summarize摘录指向ping.go:182–195，但该区间是调度循环，真正函数在201–210；同时保留FormatIP的可识别文件/函数定位，不能称全无引用。",
              "checkpoint": "沿 Wiki 自有文件+符号/行号定位本次所检查实现；保留有效文本指针，区分局部引用偏移与无产物。",
              "excerpts": [
                {
                  "label": "wiki.md:4559",
                  "quote": "Sources: [ping/ping.go:182-195]()"
                },
                {
                  "label": "wiki.md:1457",
                  "quote": "Sources: [ping/utils.go:14-25]()"
                }
              ],
              "sources": [
                {
                  "label": "ping/ping.go:182",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L182"
                },
                {
                  "label": "ping/ping.go:201",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L201"
                },
                {
                  "label": "ping/utils.go:19",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils.go#L19"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "openwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "有FormatIP的输入清理/分支说明与测试对，但没有该函数连续实现体；其它probe代码不替代固定核心函数。",
              "checkpoint": "同一 FormatIP(IP string)(string,error) 连续实现体，含 strings.Trim(IP,\"[ ]\")、net.ParseIP/To4 判断、IPv6 加括号与无效输入返回；不以其他函数源码替代。",
              "excerpts": [
                {
                  "label": "ping-framework.md:276",
                  "quote": "- `FormatIP(IP)` trims surrounding `[ ]` and spaces, validates via `net.ParseIP`,\n  and returns the host. IPv4 is returned bare (e.g. `192.168.9.1`); IPv6 is\n  bracketed (e.g. `[2002:ac1f:91c5:1::bd59]`)."
                }
              ],
              "sources": [
                {
                  "label": "ping/utils.go:19",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils.go#L19"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "yes",
              "finding": "CLI scheme/端口覆盖、1s命令默认与5s包fallback、tcp.New输入及返回probe/Ping→Stats接口均有具体材料，也有有效命令和构造片段。",
              "checkpoint": "CLI target/可选 port、缺省 tcp scheme、80/HTTPS443/URLport/第二参数覆盖及有效命令；CLI -T 默认1s与包默认5s区分；tcp.New(host,port,*Option,tls) 返回 *Ping，Ping(ctx) 返回 *Stats。",
              "excerpts": [
                {
                  "label": "cli-orchestration.md:95",
                  "quote": "1. If the URL carries an explicit port (`url.Port() != \"\"`), use it.\n2. Else, if the URL scheme is `https`, use `443`.\n3. Else, use `80`.\n4. If a second positional argument (`args[1]`) was supplied, it overrides all of\n   the above."
                },
                {
                  "label": "cli-orchestration.md:72",
                  "quote": "- `--timeout` / `-T` — default string `\"1s\"`; parsed with `ping.ParseDuration`."
                }
              ],
              "sources": [
                {
                  "label": "main.go:68",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L68"
                },
                {
                  "label": "ping/constants.go:7",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/constants.go#L7"
                },
                {
                  "label": "ping/tcp/tcp.go:16",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L16"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "yes",
              "finding": "精确说明首尾'[ ]'字符清理、ParseIP校验、IPv4裸串、IPv6括号及空串+error；六组输入输出逐一对应源码。",
              "checkpoint": "FormatIP 精确转换：去首尾字符集 '[ ]'，IPv4 裸返回，IPv6 括号返回，无效输入返回空串和错误；用同一组六个 valid/invalid/bracketed 输入校验，不换其它格式化主题。",
              "excerpts": [
                {
                  "label": "ping-framework.md:276",
                  "quote": "- `FormatIP(IP)` trims surrounding `[ ]` and spaces, validates via `net.ParseIP`,\n  and returns the host."
                },
                {
                  "label": "testing-overview.md:91",
                  "quote": "whitespace, fails (returning `\"\"` plus an `\"error IP format\"` error) unless the"
                }
              ],
              "sources": [
                {
                  "label": "ping/utils.go:19",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils.go#L19"
                },
                {
                  "label": "ping/utils_test.go:13",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils_test.go#L13"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "fix",
              "finding": "TCP/TLS章节虽给出真实DialWithDialer→fallback代码，却仍宣称两probe遵守相同timeout语义，并称任意在途probe会promptly abort；首次TLS不接ctx，保证不成立。零probe除零也未警示。",
              "checkpoint": "TCP 首次 TLS DialWithDialer 不接派生 timeout context，dialer 也未配置 Timeout；普通 TCP 和 TLS 失败后的回退才用 DialContext。另核 Pinger.Summarize 在 total=0 时除零，不能与带零保护的 Result.Avg 混淆。",
              "excerpts": [
                {
                  "label": "protocol-probes.md:256",
                  "quote": "Both probes implement the shared `Ping interface` (`Ping(ctx) *Stats`), honor the same timeout semantics and custom resolver, and return a `Stats` whose `Connected`/`Error`/`Duration`/`DNSDuration`/`Address` fields carry the outcome."
                },
                {
                  "label": "ping-lifecycle.md:282",
                  "quote": "- Closing `stopC` both unblocks the main goroutine's `select` and, through the\n  cancel-goroutine in `Ping()`, cancels the probe context so any in-flight probe\n  aborts promptly rather than hanging until its per-attempt timeout."
                }
              ],
              "sources": [
                {
                  "label": "ping/tcp/tcp.go:22",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L22"
                },
                {
                  "label": "ping/tcp/tcp.go:63",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/tcp/tcp.go#L63"
                },
                {
                  "label": "ping/ping.go:201",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L201"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "把Stop解释成先保证loop停止再汇总，并认为任意中断都干净收尾；实际只close信号，无join，统计仍可能写入。sync.Once及自然计数完成路径的说明是正确但不足以保证全局顺序。",
              "checkpoint": "Stop 通过 sync.Once 关闭 stopC，只发停止信号，不 join；signal 后 CLI 立即 Summarize，Ping/logStats 可能尚在更新字段。自然计数完成与用户中断必须区分，不能宣称全部协程已停或统计天然并发安全。",
              "excerpts": [
                {
                  "label": "ping-lifecycle.md:244",
                  "quote": "Once the `select` in `Run` resolves (either a signal arrived or the loop finished\nnaturally), `Run` calls `pinger.Stop()` to guarantee the loop halts, then\n`pinger.Summarize()`"
                },
                {
                  "label": "ping-lifecycle.md:279",
                  "quote": "- `Pinger.Stop()` closes `stopC` exactly once via a `sync.Once`"
                }
              ],
              "sources": [
                {
                  "label": "main.go:134",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L134"
                },
                {
                  "label": "ping/ping.go:156",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L156"
                },
                {
                  "label": "ping/ping.go:189",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L189"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "main→factory→probe→Stats的基本流有依据，但说final summary必为最后输出，与signal路径仍在进行的logStats/统计写入不相容；不能把Stop→Summarize的调用顺序当完成屏障。",
              "checkpoint": "main.go 注册/调用工厂→TCP Ping→Stats→Pinger/logStats→CLI Summarize 的真实跨文件调用与结果流；包括停止后报告时序，不能误称 Pinger 调用 CLI Summarize 或报告必为最后稳定输出。",
              "excerpts": [
                {
                  "label": "ping-lifecycle.md:262",
                  "quote": "meaningful only after at least one probe. The final summary is the last output of\nthe run; after `Run` returns, `rootCmd.Execute()` succeeds and `main` exits 0."
                },
                {
                  "label": "protocol-probes.md:44",
                  "quote": "- `ping.TCP` invokes `tcp.New(url.Hostname(), port, op, *meta)`, so the TCP probe always receives hostname and port, and the CLI's `--meta` flag becomes the TLS-enable flag for TCP."
                }
              ],
              "sources": [
                {
                  "label": "main.go:123",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L123"
                },
                {
                  "label": "main.go:139",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/main.go#L139"
                },
                {
                  "label": "ping/ping.go:238",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L238"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "没有成套前缀/缺口/后缀/答案任务，源码摘录和流程说明不算补全对象。",
              "checkpoint": "原 Wiki 已打包的前缀、明确缺口、后缀和答案补全对象；散落源码或 //... 不算已成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "yes",
              "finding": "testing页将固定六个FormatIP输入和明确期望逐条配对，包含非法IPv4/IPv6空串、去括号/空格及IPv6加括号；全部对应源断言。",
              "checkpoint": "固定使用 ping/utils_test.go 的六个 FormatIP 输入/明确预期：192.168.0.1、192.0.1、[192.0.1.1]尾空格、合法括号IPv6、截断IPv6、裸IPv6尾空格。文字表格也可，不要求实际执行。",
              "excerpts": [
                {
                  "label": "testing-overview.md:82",
                  "quote": "- **IPv4 valid** — `\"192.168.0.1\"` is returned unchanged.\n- **IPv4 invalid** — `\"192.0.1\"` (not a parseable address) yields `\"\"`.\n- **IPv4 format** — `\"[192.0.1.1] \"` (bracketed and space-padded) is normalized to `\"192.0.1.1\"`."
                },
                {
                  "label": "testing-overview.md:85",
                  "quote": "- **IPv6 valid** — `\"[2002:ac1f:91c5:1::bd59]\"` (bracketed IPv6) is returned unchanged with its brackets.\n- **IPv6 invalid** — `\"2002:ac1f:91c5:1:\"` (truncated) yields `\"\"`.\n- **IPv6 format** — `\"2002:ac1f:91c5:1::bd59 \"` (unbracketed, trailing space) is normalized to the bracketed `\"[2002:ac1f:91c5:1::bd59]\"`."
                }
              ],
              "sources": [
                {
                  "label": "ping/utils_test.go:13",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils_test.go#L13"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "Quickstart有“prints output like”示意输出、测试页有运行指令，但无特定环境下真实执行的记录；不把示意数值当已运行证据。",
              "checkpoint": "与具体 tcping 命令/测试和执行环境绑定的实际结果；README样式输出、源码测试、CI指令和推断结果不算实际执行记录。",
              "excerpts": [
                {
                  "label": "quickstart.md:40",
                  "quote": "At a glance, `tcping` accepts a host and optional port, then sends repeated\nprobes to the target and reports per-attempt latency plus a summary. It supports\nthree protocol schemes — `tcp`, `http`, and `https` — and prints output like:"
                }
              ],
              "sources": [
                {
                  "label": "README.md:15",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/README.md#L15"
                }
              ],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "FormatIP六案例、函数、main停止链和TLS实现都有可用repo://文件/行号定位；可沿原Wiki直接核查正确和错误主张。",
              "checkpoint": "沿 Wiki 自有文件+符号/行号定位本次所检查实现；保留有效文本指针，区分局部引用偏移与无产物。",
              "excerpts": [
                {
                  "label": "testing-overview.md:80",
                  "quote": "([`ping/utils_test.go#L9-L41`](repo://ping/utils_test.go#L9-L41)):"
                },
                {
                  "label": "testing-overview.md:90",
                  "quote": "[`ping/utils.go#L19-L31`](repo://ping/utils.go#L19-L31), which strips `[ ]` and"
                }
              ],
              "sources": [
                {
                  "label": "ping/utils_test.go:9",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils_test.go#L9"
                },
                {
                  "label": "ping/utils.go:19",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/utils.go#L19"
                },
                {
                  "label": "ping/ping.go:156",
                  "url": "https://github.com/cloverstd/tcping/blob/a3e9e7d5d7d0dc8183cb1a1bb5cfed01bf025fe5/ping/ping.go#L156"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "codewiki": {
          "available": false,
          "cells": {
            "A": {
              "status": "no_artifact",
              "finding": "本次测试的CodeWiki版本不支持该Go仓库，tcping生成失败，无可评内容；不是内容缺失。",
              "checkpoint": "同一 FormatIP(IP string)(string,error) 连续实现体，含 strings.Trim(IP,\"[ ]\")、net.ParseIP/To4 判断、IPv6 加括号与无效输入返回；不以其他函数源码替代。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "B": {
              "status": "no_artifact",
              "finding": "本次测试的CodeWiki版本不支持该Go仓库，tcping生成失败，无可评内容；不是内容缺失。",
              "checkpoint": "CLI target/可选 port、缺省 tcp scheme、80/HTTPS443/URLport/第二参数覆盖及有效命令；CLI -T 默认1s与包默认5s区分；tcp.New(host,port,*Option,tls) 返回 *Ping，Ping(ctx) 返回 *Stats。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "C": {
              "status": "no_artifact",
              "finding": "本次测试的CodeWiki版本不支持该Go仓库，tcping生成失败，无可评内容；不是内容缺失。",
              "checkpoint": "FormatIP 精确转换：去首尾字符集 '[ ]'，IPv4 裸返回，IPv6 括号返回，无效输入返回空串和错误；用同一组六个 valid/invalid/bracketed 输入校验，不换其它格式化主题。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "D": {
              "status": "no_artifact",
              "finding": "本次测试的CodeWiki版本不支持该Go仓库，tcping生成失败，无可评内容；不是内容缺失。",
              "checkpoint": "TCP 首次 TLS DialWithDialer 不接派生 timeout context，dialer 也未配置 Timeout；普通 TCP 和 TLS 失败后的回退才用 DialContext。另核 Pinger.Summarize 在 total=0 时除零，不能与带零保护的 Result.Avg 混淆。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "E": {
              "status": "no_artifact",
              "finding": "本次测试的CodeWiki版本不支持该Go仓库，tcping生成失败，无可评内容；不是内容缺失。",
              "checkpoint": "Stop 通过 sync.Once 关闭 stopC，只发停止信号，不 join；signal 后 CLI 立即 Summarize，Ping/logStats 可能尚在更新字段。自然计数完成与用户中断必须区分，不能宣称全部协程已停或统计天然并发安全。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "F": {
              "status": "no_artifact",
              "finding": "本次测试的CodeWiki版本不支持该Go仓库，tcping生成失败，无可评内容；不是内容缺失。",
              "checkpoint": "main.go 注册/调用工厂→TCP Ping→Stats→Pinger/logStats→CLI Summarize 的真实跨文件调用与结果流；包括停止后报告时序，不能误称 Pinger 调用 CLI Summarize 或报告必为最后稳定输出。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "G": {
              "status": "no_artifact",
              "finding": "本次测试的CodeWiki版本不支持该Go仓库，tcping生成失败，无可评内容；不是内容缺失。",
              "checkpoint": "原 Wiki 已打包的前缀、明确缺口、后缀和答案补全对象；散落源码或 //... 不算已成任务。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "no_artifact",
              "finding": "本次测试的CodeWiki版本不支持该Go仓库，tcping生成失败，无可评内容；不是内容缺失。",
              "checkpoint": "固定使用 ping/utils_test.go 的六个 FormatIP 输入/明确预期：192.168.0.1、192.0.1、[192.0.1.1]尾空格、合法括号IPv6、截断IPv6、裸IPv6尾空格。文字表格也可，不要求实际执行。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "I": {
              "status": "no_artifact",
              "finding": "本次测试的CodeWiki版本不支持该Go仓库，tcping生成失败，无可评内容；不是内容缺失。",
              "checkpoint": "与具体 tcping 命令/测试和执行环境绑定的实际结果；README样式输出、源码测试、CI指令和推断结果不算实际执行记录。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "no_artifact",
              "finding": "本次测试的CodeWiki版本不支持该Go仓库，tcping生成失败，无可评内容；不是内容缺失。",
              "checkpoint": "沿 Wiki 自有文件+符号/行号定位本次所检查实现；保留有效文本指针，区分局部引用偏移与无产物。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            }
          }
        }
      }
    },
    {
      "name": "Ghost",
      "slug": "cpu0x00/Ghost",
      "commit": "bf67313c72d1df48117daf4aeca604e83a570280",
      "tools": {
        "local-skill": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "有分配和资源流说明，但20页无普通代码围栏，未保留选定函数的连续实现。",
              "checkpoint": "GetFromRc或place_data_rand的连续实现与输入变量上下文；仅调用语句、流程图和签名不能代替实现片段。",
              "excerpts": [
                {
                  "label": "1.3-Randomized Payload Memory.md:7",
                  "quote": "The allocator chooses a pseudo-random offset and records both the allocation base and `lpData`, the intended payload address. `place_data_rand` copies the decrypted bytes to that address through the common spoofed-call wrapper. The context is later used for protection changes and fiber creation, so both addresses have distinct roles."
                }
              ],
              "sources": [
                {
                  "label": "allocator.h:34",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L34"
                },
                {
                  "label": "allocator.h:51",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L51"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "资源输出引用参数及失败后继续执行说明正确，但未完整给出AESDecrypt的BOOL返回与两输出参数契约。",
              "checkpoint": "GetFromRc的引用参数、始终为0的返回/继续执行契约，以及AESDecrypt的BOOL和明文输出参数；不把概念性的“返回数据”直接认定为错误签名。",
              "excerpts": [
                {
                  "label": "4.2-Source and Resource Materialization.md:41",
                  "quote": "After finding the entry, the helper loads it, locks it to obtain a pointer, and asks Windows for its exact size [rsrc.h#L21-34](). It publishes the pointer and size through its reference parameters [rsrc.h#L36-46](). The helper prints messages for null lookup, load, or lock results, but it does not return a distinct failure code or stop immediately. Consequently, an incorrectly materialized resource may surface later as a bad pointer or size rather than as a clean packaging failure."
                }
              ],
              "sources": [
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "AES.h:183",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L183"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "yes",
              "finding": "正确区分密文文件和图标，给出key/IV大小、资源标识与两个内存地址的不同用途。",
              "checkpoint": "加密输入产生密文、32字节key/16字节IV；icon.ico实际为RCDATA而非图标；lpData=基址+偏移。",
              "excerpts": [
                {
                  "label": "4.2-Source and Resource Materialization.md:11",
                  "quote": "`aes_encrypt` generates a 32-byte key and 16-byte IV, formats both as complete C++ array declarations, pads the shellcode to the AES block size, and encrypts it in CBC mode [build.py#L58-75](). `do_aes` reads the selected payload as binary data and writes the encrypted result to `icon.ico` [build.py#L77-92](). The extension is only a filename convention here; the produced file is opaque ciphertext, not an image produced by an icon encoder."
                },
                {
                  "label": "1.3-Randomized Payload Memory.md:7",
                  "quote": "The allocator chooses a pseudo-random offset and records both the allocation base and `lpData`, the intended payload address. `place_data_rand` copies the decrypted bytes to that address through the common spoofed-call wrapper. The context is later used for protection changes and fiber creation, so both addresses have distinct roles."
                }
              ],
              "sources": [
                {
                  "label": "build.py:58",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L58"
                },
                {
                  "label": "Resource.rc:4",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Resource.rc#L4"
                },
                {
                  "label": "resource1.h:5",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/resource1.h#L5"
                },
                {
                  "label": "allocator.h:53",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L53"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "写出“位置必须留足空间”，但没有说明当前偏移没有留足，以及两条malloc/delete[]不匹配路径。",
              "checkpoint": "随机位置未为复制长度预留尾部，以及malloc/delete[]两条不匹配释放路径；检查是否明确指出当前缺陷而非仅写维护建议。",
              "excerpts": [
                {
                  "label": "1.3-Randomized Payload Memory.md:22",
                  "quote": "The random offset calculation is central to correctness: the chosen position must still leave enough space for the payload. Any allocator change should preserve page alignment, validate allocation and random-fill results, and ensure the copy cannot exceed the reserved region. The current design prioritizes concealment and assumes those invariants hold."
                },
                {
                  "label": "1.2-Resource Decryption Pipeline.md:17",
                  "quote": "After the plaintext is copied into the large allocation, the temporary ciphertext is freed and the plaintext array is deleted. The large allocation remains because its random interior address becomes the fiber entry point."
                }
              ],
              "sources": [
                {
                  "label": "allocator.h:51",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L51"
                },
                {
                  "label": "allocator.h:70",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L70"
                },
                {
                  "label": "unhook.h:52",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L52"
                },
                {
                  "label": "unhook.h:137",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L137"
                },
                {
                  "label": "AES.h:136",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L136"
                },
                {
                  "label": "Ghost.cpp:94",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L94"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "一张图把辅助进程终止放到替换之后，另一张图把输入准备放到汇编之前；同份Wiki也有正确顺序，不能盖过这两处矛盾。",
              "checkpoint": "build.py串行阶段顺序、辅助进程终止相对本地替换的顺序、main先准备环境再读取资源的顺序。",
              "excerpts": [
                {
                  "label": "3-Telemetry Suppression and Sleep Evasion.md:16",
                  "quote": "F --> G[Terminate helper]"
                },
                {
                  "label": "4.3-Cross-Compilation Stages.md:12",
                  "quote": "A[Prepare sources and payload] --> B[Assemble native stubs]"
                }
              ],
              "sources": [
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                },
                {
                  "label": "unhook.h:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L66"
                },
                {
                  "label": "Ghost.cpp:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L66"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "源码与资源共同生成的跨文件说明具体，但所查构建链图的先后依赖错误，需要连同正确链路一起保留并纠正。",
              "checkpoint": "build.py、Resource.rc、Ghost.cpp、rsrc.h、AES.h之间的产物与调用链，包括其关键先后依赖；模块列表不能代替链路。",
              "excerpts": [
                {
                  "label": "4.2-Source and Resource Materialization.md:64",
                  "quote": "The central invariant is that both branches originate from the same `aes_encrypt` call. The resource alone contains no decryption key, and the arrays alone contain no payload. Compilation can succeed when the branches come from different runs, but runtime decryption will fail because CBC ciphertext is bound to its exact key and IV."
                },
                {
                  "label": "4.3-Cross-Compilation Stages.md:12",
                  "quote": "A[Prepare sources and payload] --> B[Assemble native stubs]"
                }
              ],
              "sources": [
                {
                  "label": "build.py:86",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L86"
                },
                {
                  "label": "build.py:143",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L143"
                },
                {
                  "label": "Resource.rc:4",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Resource.rc#L4"
                },
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "Ghost.cpp:69",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L69"
                },
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                },
                {
                  "label": "unhook.h:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L66"
                },
                {
                  "label": "Ghost.cpp:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L66"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到前文、明确缺口、后文、答案配套的补全样本。",
              "checkpoint": "完整Wiki中已有的前文、缺口、后文、答案成套补全对象。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "给出检查工具链和生成物的建议，没有具体测试输入与明确结果配对。",
              "checkpoint": "针对资源、内存或构建的具体测试输入与明确预期；一般验证建议和生产代码中的检查不是测试样本。",
              "excerpts": [
                {
                  "label": "4.3-Cross-Compilation Stages.md:25",
                  "quote": "A[Check toolchain] --> B[Inspect generated objects]"
                }
              ],
              "sources": [
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到绑定本仓具体示例和环境的真实运行记录。",
              "checkpoint": "绑定具体示例和执行上下文的真实运行记录；文档生成时间、verified元数据和验证建议不能代替。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "partial",
              "finding": "两页构建材料有可读源码行号，18/20页无正式源码引用；本次资源链可追溯，内存与生命周期说明的证据不完整。",
              "checkpoint": "本次所查事实是否带可用的源码文件加符号或行号；接受可读的空href标签，但不能把全篇无逐事实引用说成引用完整。",
              "excerpts": [
                {
                  "label": "4.2-Source and Resource Materialization.md:5",
                  "quote": "The script requires an x64 shellcode path, derives source and build paths from the current working directory, and fixes the locations of `windres`, NASM, and MinGW [build.py#L14-31](). Its main sequence prepares the payload before compiling either affected input: assembly comes first, then shellcode/source preparation, resource compilation, C++ compilation, and linking [build.py#L196-201](). This ordering ensures that the resource compiler sees fresh ciphertext and the C++ compiler sees its matching key material."
                },
                {
                  "label": "1.3-Randomized Payload Memory.md:4",
                  "quote": "`allocate_large_page` expands the requested payload size by a factor of 2048 and page-aligns the result. It reserves and commits the region as read-write memory through `NtAllocateVirtualMemory`, then fills the entire allocation with bytes from `SystemFunction036`. This creates a large noisy region instead of a compact buffer whose boundaries directly reveal the payload."
                }
              ],
              "sources": [
                {
                  "label": "allocator.h:34",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L34"
                },
                {
                  "label": "allocator.h:51",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L51"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "devinwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "保留调用语句、变量和内存图，但选定资源/复制函数未展示连续实现。",
              "checkpoint": "GetFromRc或place_data_rand的连续实现与输入变量上下文；仅调用语句、流程图和签名不能代替实现片段。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "pLPI = allocate_large_page(PlainBufferSize);"
                }
              ],
              "sources": [
                {
                  "label": "allocator.h:34",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L34"
                },
                {
                  "label": "allocator.h:51",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L51"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "有输入与数据输出方向，未明确GetFromRc始终返回0和AESDecrypt通过BOOL加输出参数交付的完整契约；概念表述不直接判成错误。",
              "checkpoint": "GetFromRc的引用参数、始终为0的返回/继续执行契约，以及AESDecrypt的BOOL和明文输出参数；不把概念性的“返回数据”直接认定为错误签名。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "1. `AESDecrypt()` - The public-facing function that takes encrypted data, key, and IV as input and returns the decrypted data."
                }
              ],
              "sources": [
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "AES.h:183",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L183"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "fix",
              "finding": "key/IV与内存结构说明可用，但把密文说成以图标资源存储，和RCDATA原始字节类型不符。",
              "checkpoint": "加密输入产生密文、32字节key/16字节IV；icon.ico实际为RCDATA而非图标；lpData=基址+偏移。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "1. **Resource Embedding**: The encrypted shellcode is stored in the executable's resources as an icon"
                },
                {
                  "label": "wiki.json",
                  "quote": "- `KEY`: 32-byte AES key used for decryption"
                }
              ],
              "sources": [
                {
                  "label": "build.py:58",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L58"
                },
                {
                  "label": "Resource.rc:4",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Resource.rc#L4"
                },
                {
                  "label": "resource1.h:5",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/resource1.h#L5"
                },
                {
                  "label": "allocator.h:53",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L53"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "展示正常随机放置和清理，但未指出选中偏移的越界条件及分配/释放方式不匹配。",
              "checkpoint": "随机位置未为复制长度预留尾部，以及malloc/delete[]两条不匹配释放路径；检查是否明确指出当前缺陷而非仅写维护建议。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "2. **Memory Cleanup**: Temporary buffers are explicitly freed after use to minimize exposure of sensitive data in memory."
                },
                {
                  "label": "wiki.json",
                  "quote": "4. Calculates a random offset within the allocation"
                }
              ],
              "sources": [
                {
                  "label": "allocator.h:51",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L51"
                },
                {
                  "label": "allocator.h:70",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L70"
                },
                {
                  "label": "unhook.h:52",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L52"
                },
                {
                  "label": "unhook.h:137",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L137"
                },
                {
                  "label": "AES.h:136",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L136"
                },
                {
                  "label": "Ghost.cpp:94",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L94"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "构建图明确写Process in parallel，实际各阶段串行，且汇编在输入准备之前。",
              "checkpoint": "build.py串行阶段顺序、辅助进程终止相对本地替换的顺序、main先准备环境再读取资源的顺序。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "UpdateSourceCode --> ParallelProcess[\"Process in parallel\"]"
                }
              ],
              "sources": [
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                },
                {
                  "label": "unhook.h:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L66"
                },
                {
                  "label": "Ghost.cpp:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L66"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "跨文件产物关系有材料，但将这些阶段画成并行使实际控制依赖错误，不能只取正确关联图判断为全绿。",
              "checkpoint": "build.py、Resource.rc、Ghost.cpp、rsrc.h、AES.h之间的产物与调用链，包括其关键先后依赖；模块列表不能代替链路。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "UpdateSourceCode --> ParallelProcess[\"Process in parallel\"]"
                },
                {
                  "label": "wiki.json",
                  "quote": "BuildPy -->|\"modifies\"| GhostCpp[\"Ghost.cpp\"]"
                }
              ],
              "sources": [
                {
                  "label": "build.py:86",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L86"
                },
                {
                  "label": "build.py:143",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L143"
                },
                {
                  "label": "Resource.rc:4",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Resource.rc#L4"
                },
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "Ghost.cpp:69",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L69"
                },
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                },
                {
                  "label": "unhook.h:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L66"
                },
                {
                  "label": "Ghost.cpp:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L66"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到前文、明确缺口、后文、答案配套的补全样本。",
              "checkpoint": "完整Wiki中已有的前文、缺口、后文、答案成套补全对象。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "missing",
              "finding": "所查16页没有具体测试输入与明确预期成对材料。",
              "checkpoint": "针对资源、内存或构建的具体测试输入与明确预期；一般验证建议和生产代码中的检查不是测试样本。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到绑定本仓具体示例和环境的真实运行记录。",
              "checkpoint": "绑定具体示例和执行上下文的真实运行记录；文档生成时间、verified元数据和验证建议不能代替。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "相关页提供源码文件清单和可读行号标签，可回到选中函数；空href影响点击，不抹掉可读定位。",
              "checkpoint": "本次所查事实是否带可用的源码文件加符号或行号；接受可读的空href标签，但不能把全篇无逐事实引用说成引用完整。",
              "excerpts": [
                {
                  "label": "wiki.json",
                  "quote": "Sources: [allocator.h:34-73]()"
                },
                {
                  "label": "wiki.json",
                  "quote": "Sources: [build.py:196-201]()"
                }
              ],
              "sources": [
                {
                  "label": "allocator.h:34",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L34"
                },
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "deepwiki-open": {
          "available": true,
          "cells": {
            "A": {
              "status": "yes",
              "finding": "保留GetFromRc以及place_data_rand连续实现，已核对核心变量、输出和拷贝语句；不表示周围解释都正确。",
              "checkpoint": "GetFromRc或place_data_rand的连续实现与输入变量上下文；仅调用语句、流程图和签名不能代替实现片段。",
              "excerpts": [
                {
                  "label": "wiki.md:422",
                  "quote": "int GetFromRc(DWORD& size, PVOID& ptr) {"
                },
                {
                  "label": "wiki.md:763",
                  "quote": "void place_data_rand(PLARGE_PAGE_INFORMATION pCtx, PBYTE pbBuffer, SIZE_T cbBuffer) {"
                }
              ],
              "sources": [
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "AES.h:183",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L183"
                },
                {
                  "label": "allocator.h:70",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L70"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "GetFromRc的完整返回和输出契约可见；未在相关解密段落找到同等完整的AESDecrypt公共返回和输出参数契约。",
              "checkpoint": "GetFromRc的引用参数、始终为0的返回/继续执行契约，以及AESDecrypt的BOOL和明文输出参数；不把概念性的“返回数据”直接认定为错误签名。",
              "excerpts": [
                {
                  "label": "wiki.md:3815",
                  "quote": "The `GetFromRc` function takes two output parameters — a size reference and a pointer reference — and populates them with the resource data:"
                },
                {
                  "label": "wiki.md:1136",
                  "quote": "return 0;"
                }
              ],
              "sources": [
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "AES.h:183",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L183"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "yes",
              "finding": "已核密文生成、32/16字节key/IV和lpData偏移关系有与源码对应材料；未将文件扩展名直接等同实际ICON类型。",
              "checkpoint": "加密输入产生密文、32字节key/16字节IV；icon.ico实际为RCDATA而非图标；lpData=基址+偏移。",
              "excerpts": [
                {
                  "label": "wiki.md:374",
                  "quote": "pCtx->lpData = (LPVOID)((uintptr_t)pCtx->lpPage + pCtx->dwOffset);"
                },
                {
                  "label": "wiki.md:2316",
                  "quote": "The payload is stored as an encrypted resource and extracted using `GetFromRc()` from `rsrc.h`. The function uses return address spoofing for all resource API calls:"
                }
              ],
              "sources": [
                {
                  "label": "build.py:58",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L58"
                },
                {
                  "label": "Resource.rc:4",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Resource.rc#L4"
                },
                {
                  "label": "resource1.h:5",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/resource1.h#L5"
                },
                {
                  "label": "allocator.h:53",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L53"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "贴出偏移与复制代码，但未解释二者合起来的越界条件，也未指出malloc/delete[]不匹配。",
              "checkpoint": "随机位置未为复制长度预留尾部，以及malloc/delete[]两条不匹配释放路径；检查是否明确指出当前缺陷而非仅写维护建议。",
              "excerpts": [
                {
                  "label": "wiki.md:373",
                  "quote": "pCtx->dwOffset = RANDOM_NUMB(0, pCtx->uSize);"
                },
                {
                  "label": "wiki.md:1336",
                  "quote": "delete[] clean_buffer;"
                }
              ],
              "sources": [
                {
                  "label": "allocator.h:51",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L51"
                },
                {
                  "label": "allocator.h:70",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L70"
                },
                {
                  "label": "unhook.h:52",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L52"
                },
                {
                  "label": "unhook.h:137",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L137"
                },
                {
                  "label": "AES.h:136",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L136"
                },
                {
                  "label": "Ghost.cpp:94",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L94"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "fix",
              "finding": "运行总览把读取、解密、放置数据画在环境准备前面，实际main先环境准备再读取；后面的局部步骤正确不能消除这处错误。",
              "checkpoint": "build.py串行阶段顺序、辅助进程终止相对本地替换的顺序、main先准备环境再读取资源的顺序。",
              "excerpts": [
                {
                  "label": "wiki.md:1111",
                  "quote": "E --> F[Unhook NTDLL]"
                },
                {
                  "label": "wiki.md:1552",
                  "quote": "H --> I[FlushNTDLL]"
                }
              ],
              "sources": [
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                },
                {
                  "label": "unhook.h:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L66"
                },
                {
                  "label": "Ghost.cpp:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L66"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "同一运行总图将rsrc/AES/allocator与unhook的调用顺序画反，跨文件定位有材料但控制链要纠错。",
              "checkpoint": "build.py、Resource.rc、Ghost.cpp、rsrc.h、AES.h之间的产物与调用链，包括其关键先后依赖；模块列表不能代替链路。",
              "excerpts": [
                {
                  "label": "wiki.md:1552",
                  "quote": "H --> I[FlushNTDLL]"
                },
                {
                  "label": "wiki.md:2316",
                  "quote": "The payload is stored as an encrypted resource and extracted using `GetFromRc()` from `rsrc.h`. The function uses return address spoofing for all resource API calls:"
                }
              ],
              "sources": [
                {
                  "label": "build.py:86",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L86"
                },
                {
                  "label": "build.py:143",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L143"
                },
                {
                  "label": "Resource.rc:4",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Resource.rc#L4"
                },
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "Ghost.cpp:69",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L69"
                },
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                },
                {
                  "label": "unhook.h:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L66"
                },
                {
                  "label": "Ghost.cpp:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L66"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到前文、明确缺口、后文、答案配套的补全样本。",
              "checkpoint": "完整Wiki中已有的前文、缺口、后文、答案成套补全对象。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "只有Test and Verify等一般验证建议，未找到选中核心流程的具体输入与预期配对。",
              "checkpoint": "针对资源、内存或构建的具体测试输入与明确预期；一般验证建议和生产代码中的检查不是测试样本。",
              "excerpts": [
                {
                  "label": "wiki.md:4520",
                  "quote": "C --> H[Test and Verify]"
                }
              ],
              "sources": [],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到绑定本仓具体示例和环境的真实运行记录。",
              "checkpoint": "绑定具体示例和执行上下文的真实运行记录；文档生成时间、verified元数据和验证建议不能代替。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "partial",
              "finding": "源码标签有文件名与行号，但主流程引用build.py:200-202不足以支持完整五阶段顺序，存在定位不完整的情况。",
              "checkpoint": "本次所查事实是否带可用的源码文件加符号或行号；接受可读的空href标签，但不能把全篇无逐事实引用说成引用完整。",
              "excerpts": [
                {
                  "label": "wiki.md:4072",
                  "quote": "Sources: [build.py:200-202]()"
                },
                {
                  "label": "wiki.md:3838",
                  "quote": "Sources: [rsrc.h:8-47]()"
                }
              ],
              "sources": [
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                },
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "openwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "有相关调用片段和流程说明，选定GetFromRc/place_data_rand缺完整连续实现；AES示意片段明确使用省略号，不误称为完整源码。",
              "checkpoint": "GetFromRc或place_data_rand的连续实现与输入变量上下文；仅调用语句、流程图和签名不能代替实现片段。",
              "excerpts": [
                {
                  "label": "shellcode-encryption-and-hiding.md:76",
                  "quote": "`GetFromRc(DWORD& size, PVOID& ptr)` in `rsrc.h` pulls the encrypted payload out of the embedded resource using the classic Windows resource API, with every call hash-resolved and ret-spoofed:"
                }
              ],
              "sources": [
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "AES.h:183",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L183"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "GetFromRc段说空值会停止，源码各空值分支只打印并继续，最终仍返回0；AES输出参数说明正确。",
              "checkpoint": "GetFromRc的引用参数、始终为0的返回/继续执行契约，以及AESDecrypt的BOOL和明文输出参数；不把概念性的“返回数据”直接认定为错误签名。",
              "excerpts": [
                {
                  "label": "shellcode-encryption-and-hiding.md:83",
                  "quote": "All four are resolved in `functions.h` from `kernelbase.dll` via hash (`e_FindResourceW`, `e_LoadResource`, `e_LockResource`, `e_SizeofResource`) and each passed through `RetSpoofCall((void*)e_..., Gdgt, ...)`. The function writes the resource base into `ptr` and its size into `size`, returning `0` on success (it stops and prints a failure line if any step returns `NULL`, though it does not hard-abort)."
                }
              ],
              "sources": [
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "AES.h:183",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L183"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "fix",
              "finding": "把密文RCDATA写成Windows会显示的图标，源码只是给密文字节使用.ico文件名；key/IV和偏移计算本身可用。",
              "checkpoint": "加密输入产生密文、32字节key/16字节IV；icon.ico实际为RCDATA而非图标；lpData=基址+偏移。",
              "excerpts": [
                {
                  "label": "shellcode-encryption-and-hiding.md:58",
                  "quote": "The result is that the only encrypted payload on disk rides inside a resource that Windows shows as an `.ico` icon, and the decryption key changes every build so old static signatures for the key never persist."
                }
              ],
              "sources": [
                {
                  "label": "build.py:58",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L58"
                },
                {
                  "label": "Resource.rc:4",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Resource.rc#L4"
                },
                {
                  "label": "resource1.h:5",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/resource1.h#L5"
                },
                {
                  "label": "allocator.h:53",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L53"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "写出了随机偏移以及malloc和delete[]，但没有指出当前缺失复制边界检查和错误释放方式。",
              "checkpoint": "随机位置未为复制长度预留尾部，以及malloc/delete[]两条不匹配释放路径；检查是否明确指出当前缺陷而非仅写维护建议。",
              "excerpts": [
                {
                  "label": "shellcode-encryption-and-hiding.md:120",
                  "quote": "- It picks a **random byte offset** `dwOffset = RANDOM_NUMB(0, uSize)` and computes `lpData = (BYTE*)lpPage + dwOffset` — the random slot where the payload will live."
                },
                {
                  "label": "ntdll-unhooking.md:144",
                  "quote": "- **Memory management:** `ReadBufferFromProcess` hands ownership of the `malloc`'d buffer to the caller; `FlushNTDLL` frees it with `delete[] clean_buffer` after the copy."
                }
              ],
              "sources": [
                {
                  "label": "allocator.h:51",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L51"
                },
                {
                  "label": "allocator.h:70",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L70"
                },
                {
                  "label": "unhook.h:52",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L52"
                },
                {
                  "label": "unhook.h:137",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L137"
                },
                {
                  "label": "AES.h:136",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L136"
                },
                {
                  "label": "Ghost.cpp:94",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L94"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "yes",
              "finding": "选定构建阶段、main先准备后读取以及辅助进程在读取后终止的关键顺序有正确材料；依赖图分叉不自动等于并行执行。",
              "checkpoint": "build.py串行阶段顺序、辅助进程终止相对本地替换的顺序、main先准备环境再读取资源的顺序。",
              "excerpts": [
                {
                  "label": "build-and-deploy.md:57",
                  "quote": "The `main` block runs the five stages in a fixed order:"
                },
                {
                  "label": "ntdll-unhooking.md:92",
                  "quote": "5. `RetSpoofCall((void*)SysNtTerminateProcess, 2, Gdgt, hProcess, 0)` tears down the temporary process (terminating with exit code 0). Failure prints `Termination Error`."
                }
              ],
              "sources": [
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                },
                {
                  "label": "unhook.h:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L66"
                },
                {
                  "label": "Ghost.cpp:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L66"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "yes",
              "finding": "能定位到构建文件、资源标识、资源读取、解密与分配的数据传递链；资源是否为图标的事实错误已在C列记录。",
              "checkpoint": "build.py、Resource.rc、Ghost.cpp、rsrc.h、AES.h之间的产物与调用链，包括其关键先后依赖；模块列表不能代替链路。",
              "excerpts": [
                {
                  "label": "shared-types-and-constants.md:119",
                  "quote": "`Resource.rc` contains a single line, `IDR_RCDATA1 RCDATA \"icon.ico\"`, which binds `IDR_RCDATA1` to a custom `RCDATA` resource whose bytes are read from the file `icon.ico`. At runtime `rsrc.h`'s `GetFromRc()` retrieves that payload by calling `FindResourceW(NULL, MAKEINTRESOURCEW(IDR_RCDATA1), RT_RCDATA)` → `LoadResource` → `LockResource` → `SizeofResource`, then hands the bytes to `AESDecrypt` in `main()` for decryption before staging. Together this lets the loader carry its encrypted shellcode as a data resource rather than in a plain import/global — the same resource that `build.py` regenerates (along with the AES key/IV) for each build."
                },
                {
                  "label": "shellcode-encryption-and-hiding.md:152",
                  "quote": "M->>AL: place_data_rand(pLPI, plaintext, size)"
                }
              ],
              "sources": [
                {
                  "label": "build.py:86",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L86"
                },
                {
                  "label": "build.py:143",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L143"
                },
                {
                  "label": "Resource.rc:4",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Resource.rc#L4"
                },
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "Ghost.cpp:69",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L69"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到前文、明确缺口、后文、答案配套的补全样本。",
              "checkpoint": "完整Wiki中已有的前文、缺口、后文、答案成套补全对象。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "明确原仓没有自动测试，只有编译验证说明，未给具体输入与预期结果配对。",
              "checkpoint": "针对资源、内存或构建的具体测试输入与明确预期；一般验证建议和生产代码中的检查不是测试样本。",
              "excerpts": [
                {
                  "label": "quickstart.md:85",
                  "quote": "- **There are no automated tests.** Validation is via compilation with the MinGW cross-compiler toolchain (running on Linux) plus NASM for the assembly stubs. `build.py` drives the whole thing and is the only supported build path."
                }
              ],
              "sources": [
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到绑定本仓具体示例和环境的真实运行记录。",
              "checkpoint": "绑定具体示例和执行上下文的真实运行记录；文档生成时间、verified元数据和验证建议不能代替。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "相关页提供repo://源文件条目，并将函数名与对应文件写在一起，能追溯选定事实；verified仅为文档元数据。",
              "checkpoint": "本次所查事实是否带可用的源码文件加符号或行号；接受可读的空href标签，但不能把全篇无逐事实引用说成引用完整。",
              "excerpts": [
                {
                  "label": "shellcode-encryption-and-hiding.md:13",
                  "quote": "resource: repo://allocator.h"
                },
                {
                  "label": "shellcode-encryption-and-hiding.md:76",
                  "quote": "`GetFromRc(DWORD& size, PVOID& ptr)` in `rsrc.h` pulls the encrypted payload out of the embedded resource using the classic Windows resource API, with every call hash-resolved and ret-spoofed:"
                }
              ],
              "sources": [
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "AES.h:183",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L183"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "codewiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "该单页保留架构和函数说明，没有选定资源/复制函数的连续实现。",
              "checkpoint": "GetFromRc或place_data_rand的连续实现与输入变量上下文；仅调用语句、流程图和签名不能代替实现片段。",
              "excerpts": [
                {
                  "label": "overview.md:409",
                  "quote": "| `rsrc.h::GetFromRc` | Returns a pointer and size for the encrypted resource. |"
                }
              ],
              "sources": [
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "AES.h:183",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L183"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "借用资源和堆内存所有权说得清楚，但没有GetFromRc的完整返回约定及AESDecrypt的BOOL/输出参数签名。",
              "checkpoint": "GetFromRc的引用参数、始终为0的返回/继续执行契约，以及AESDecrypt的BOOL和明文输出参数；不把概念性的“返回数据”直接认定为错误签名。",
              "excerpts": [
                {
                  "label": "overview.md:438",
                  "quote": "- `GetFromRc` returns a borrowed pointer into the executable resource; the caller does not free it."
                },
                {
                  "label": "overview.md:439",
                  "quote": "- `AESDecrypt` returns a heap allocation created with `malloc`; the caller owns it."
                }
              ],
              "sources": [
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "AES.h:183",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L183"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "yes",
              "finding": "明确密文不按图标处理，并正确描述key/IV以及lpData相对基址的关系。",
              "checkpoint": "加密输入产生密文、32字节key/16字节IV；icon.ico实际为RCDATA而非图标；lpData=基址+偏移。",
              "excerpts": [
                {
                  "label": "overview.md:164",
                  "quote": "The encrypted file is named `icon.ico`, but it is not treated as an icon. It is opaque AES ciphertext embedded under an `RCDATA` resource type."
                },
                {
                  "label": "overview.md:327",
                  "quote": "| `lpData` | Intended payload entry point at `lpPage + dwOffset`. |"
                }
              ],
              "sources": [
                {
                  "label": "build.py:58",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L58"
                },
                {
                  "label": "Resource.rc:4",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Resource.rc#L4"
                },
                {
                  "label": "resource1.h:5",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/resource1.h#L5"
                },
                {
                  "label": "allocator.h:53",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L53"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "yes",
              "finding": "明确识别偏移未留复制空间，以及FlushNTDLL和main中malloc/delete[]不匹配，能支持所选失败边界。",
              "checkpoint": "随机位置未为复制长度预留尾部，以及malloc/delete[]两条不匹配释放路径；检查是否明确指出当前缺陷而非仅写维护建议。",
              "excerpts": [
                {
                  "label": "overview.md:465",
                  "quote": "- `allocate_large_page` chooses an offset from the whole allocation without reserving `cbBuffer` bytes at the end. A high offset can make `place_data_rand` write beyond the region."
                },
                {
                  "label": "overview.md:467",
                  "quote": "- Buffers created with `malloc` are released with `delete[]` in `FlushNTDLL` and `main`, which is undefined behavior. They should be paired with `free`."
                }
              ],
              "sources": [
                {
                  "label": "allocator.h:51",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L51"
                },
                {
                  "label": "allocator.h:70",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/allocator.h#L70"
                },
                {
                  "label": "unhook.h:52",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L52"
                },
                {
                  "label": "unhook.h:137",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L137"
                },
                {
                  "label": "AES.h:136",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L136"
                },
                {
                  "label": "Ghost.cpp:94",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L94"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "partial",
              "finding": "构建顺序没有讲全资源与 C++ 编译先后；从有收紧为部分，不是新增事实错误。",
              "checkpoint": "build.py串行阶段顺序、辅助进程终止相对本地替换的顺序、main先准备环境再读取资源的顺序。",
              "excerpts": [
                {
                  "label": "overview.md:139",
                  "quote": "Start --> Assemble"
                },
                {
                  "label": "overview.md:277",
                  "quote": "4. The temporary process is terminated."
                }
              ],
              "sources": [
                {
                  "label": "build.py:196",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L196"
                },
                {
                  "label": "unhook.h:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/unhook.h#L66"
                },
                {
                  "label": "Ghost.cpp:66",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L66"
                }
              ],
              "correctionCase": "ghost-build-order"
            },
            "F": {
              "status": "yes",
              "finding": "跨文件输入、资源与key生成、运行时读取解密链清楚，源文件加函数名可定位。",
              "checkpoint": "build.py、Resource.rc、Ghost.cpp、rsrc.h、AES.h之间的产物与调用链，包括其关键先后依赖；模块列表不能代替链路。",
              "excerpts": [
                {
                  "label": "overview.md:176",
                  "quote": "`prepare_src_shellcode()` modifies `Ghost.cpp` in place, while `do_aes()` creates or overwrites `icon.ico`. Consequently, a build changes tracked source material and leaves payload-specific secrets in the generated source and executable."
                },
                {
                  "label": "overview.md:288",
                  "quote": "`GetFromRc` uses dynamically resolved resource APIs to find, load, lock, and size `IDR_RCDATA1`. `main` copies the locked resource bytes into a heap buffer before passing them to `AESDecrypt`."
                }
              ],
              "sources": [
                {
                  "label": "build.py:86",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L86"
                },
                {
                  "label": "build.py:143",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/build.py#L143"
                },
                {
                  "label": "Resource.rc:4",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Resource.rc#L4"
                },
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "Ghost.cpp:69",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/Ghost.cpp#L69"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到前文、明确缺口、后文、答案配套的补全样本。",
              "checkpoint": "完整Wiki中已有的前文、缺口、后文、答案成套补全对象。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "missing",
              "finding": "只有架构、约束和缺陷说明，未找到针对所选流程的具体测试输入与预期。",
              "checkpoint": "针对资源、内存或构建的具体测试输入与明确预期；一般验证建议和生产代码中的检查不是测试样本。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到绑定本仓具体示例和环境的真实运行记录。",
              "checkpoint": "绑定具体示例和执行上下文的真实运行记录；文档生成时间、verified元数据和验证建议不能代替。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "无逐行超链接，但责任表提供file::function，所选关键事实能回到匹配函数；不代表整份文档每句话都有引用。",
              "checkpoint": "本次所查事实是否带可用的源码文件加符号或行号；接受可读的空href标签，但不能把全篇无逐事实引用说成引用完整。",
              "excerpts": [
                {
                  "label": "overview.md:409",
                  "quote": "| `rsrc.h::GetFromRc` | Returns a pointer and size for the encrypted resource. |"
                },
                {
                  "label": "overview.md:410",
                  "quote": "| `AES.h::AESDecrypt` | Public decryption wrapper returning a newly allocated plaintext buffer. |"
                }
              ],
              "sources": [
                {
                  "label": "rsrc.h:12",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/rsrc.h#L12"
                },
                {
                  "label": "AES.h:183",
                  "url": "https://github.com/cpu0x00/Ghost/blob/bf67313c72d1df48117daf4aeca604e83a570280/AES.h#L183"
                }
              ],
              "correctionCase": null
            }
          }
        }
      }
    },
    {
      "name": "sqlx",
      "slug": "jmoiron/sqlx",
      "commit": "41dac167fdad5e3fd81d66cafba0951dc6823a30",
      "tools": {
        "local-skill": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "Rebind和连接生命周期有较细文字/图示，但所选函数没有连续实际实现体；不把这些说明当作可直接切片的源码上下文。",
              "checkpoint": "Rebind、Connect 及所选安全扫描路径/isUnsafe 的实际连续实现上下文；不能以使用例或流程图替代，合并Go type-switch case后访问interface字段等误写须修正。",
              "excerpts": [
                {
                  "label": "2.1-Driver Placeholder Binding.md:61",
                  "quote": "`Rebind` receives a bind type and a query expressed with question marks. For `QUESTION` and `UNKNOWN`, it returns the original string immediately [bind.go:L59-L64](). The unknown case is conservative: sqlx does not invent syntax for an unregistered driver. A caller using such a driver can register its actual style with `BindDriver` or continue using question-mark SQL when that is valid.\n\n### Single Pass Conversion\n\nFor the remaining styles, the function creates a byte slice with capacity equal to the input length plus a small allowance. It repeatedly finds the next question mark, copies the preceding SQL, writes the style-specific prefix, appends an incrementing decimal position, and continues with the remaining suffix [bind.go:L66-L89](). The resulting sequence is one-based because the counter is incremented before it is appended.\n\nThe output forms follow the selected category. Dollar binding emits markers such as dollar one and dollar two. Named binding emits names based on `arg` plus the position. At binding emits names based on `p` plus the position and an at prefix. Text that is not a question mark is copied without interpretation.\n\nThis is a lexical transformation, not an SQL parser. A source comment explicitly notes that escaped question marks are not specially recognized [bind.go:L56-L57](). Consequently, callers should not treat `Rebind` as aware of string literals, comments, operators, or dialect grammar. Its contract is narrow: replace canonical bind markers in SQL prepared for this transformation."
                },
                {
                  "label": "1.3-Public Query and Convenience APIs.md:7",
                  "quote": "`Open` has the same deferred-connect semantics as `sql.Open`: it creates a pool wrapper, records the driver name, and installs the mapper. `Connect` calls Open and then Ping, closing the handle if connectivity fails [sqlx.go:L250-L290]. This makes Open appropriate when connection establishment is managed later and Connect appropriate when startup should fail immediately. The README demonstrates Connect for eager validation and notes Open as the standard-library-style alternative [README.md:L96-L108]."
                }
              ],
              "sources": [
                {
                  "label": "bind.go:60",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/bind.go#L60"
                },
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "partial",
              "finding": "Connect的Open/Ping含义正确，但没有展开driverName/dataSourceName、(*DB,error)和相应有效调用的完整接口材料。",
              "checkpoint": "Connect(driverName,dataSourceName) 返回 (*DB,error)，有效调用需处理两值；MustConnect 返回一个 *DB 并在错误时panic，不能写成返回error。",
              "excerpts": [
                {
                  "label": "1.3-Public Query and Convenience APIs.md:7",
                  "quote": "`Open` has the same deferred-connect semantics as `sql.Open`: it creates a pool wrapper, records the driver name, and installs the mapper. `Connect` calls Open and then Ping, closing the handle if connectivity fails [sqlx.go:L250-L290]. This makes Open appropriate when connection establishment is managed later and Connect appropriate when startup should fail immediately. The README demonstrates Connect for eager validation and notes Open as the standard-library-style alternative [README.md:L96-L108]."
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                },
                {
                  "label": "sqlx.go:654",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L654"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "fix",
              "finding": "正常VALUES复制/Rebind顺序基本正确，但断言找不到或解析不了VALUES就返回错误；实际fixBound会原样返回bound。",
              "checkpoint": "Rebind的QUESTION/UNKNOWN原样返回与DOLLAR/NAMED/AT输出；生产fixBound复制VALUES组、未匹配/未闭合时返回原串；Schema的引号/时间函数改写只在测试，不是自动SQL方言/分页转换层。",
              "excerpts": [
                {
                  "label": "2.3-Named Parameters and Batch Execution.md:67",
                  "quote": "`bindNamedMapper` inspects the indirect argument kind. Maps are bound as a single record, arrays and slices are sent to `bindArray`, and other values are treated as structs [named.go:L406-L435](). Batch handling first compiles the named query to question-mark form, then requires a non-empty collection. It binds the first element to establish the argument count and appends values from each remaining element in record order [named.go:L273-L304]().\n\nWhen the collection has multiple records, `fixBound` locates the `VALUES` tuple in the compiled statement and repeats that parenthesized group, separated by commas, once per additional record [named.go:L225-L271](). This keeps SQL placeholder count synchronized with the flattened argument list. After expansion, a non-question target is passed through `Rebind`, so numbered drivers receive final numbering across every repeated tuple [named.go:L301-L325]().\n\nThe batch algorithm is deliberately tied to a `VALUES (...)` shape rather than being a general SQL repetition engine. Failure to find or parse the tuple produces an error rather than silently generating mismatched SQL. The caller also cannot bind an empty collection, because there would be neither a template record nor a valid argument sequence from which to construct the statement [named.go:L273-L300]()."
                },
                {
                  "label": "2.1-Driver Placeholder Binding.md:61",
                  "quote": "`Rebind` receives a bind type and a query expressed with question marks. For `QUESTION` and `UNKNOWN`, it returns the original string immediately [bind.go:L59-L64](). The unknown case is conservative: sqlx does not invent syntax for an unregistered driver. A caller using such a driver can register its actual style with `BindDriver` or continue using question-mark SQL when that is valid.\n\n### Single Pass Conversion\n\nFor the remaining styles, the function creates a byte slice with capacity equal to the input length plus a small allowance. It repeatedly finds the next question mark, copies the preceding SQL, writes the style-specific prefix, appends an incrementing decimal position, and continues with the remaining suffix [bind.go:L66-L89](). The resulting sequence is one-based because the counter is incremented before it is appended.\n\nThe output forms follow the selected category. Dollar binding emits markers such as dollar one and dollar two. Named binding emits names based on `arg` plus the position. At binding emits names based on `p` plus the position and an at prefix. Text that is not a question mark is copied without interpretation.\n\nThis is a lexical transformation, not an SQL parser. A source comment explicitly notes that escaped question marks are not specially recognized [bind.go:L56-L57](). Consequently, callers should not treat `Rebind` as aware of string literals, comments, operators, or dialect grammar. Its contract is narrow: replace canonical bind markers in SQL prepared for this transformation."
                }
              ],
              "sources": [
                {
                  "label": "named.go:245",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L245"
                },
                {
                  "label": "named.go:293",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L293"
                },
                {
                  "label": "bind.go:60",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/bind.go#L60"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "fix",
              "finding": "safe扫描列到字段方向说明正确；同Wiki却把fixBound静默原串回退写成错误分支，遗漏不能以正确safe章节覆盖。",
              "checkpoint": "safe扫描只因结果列无目的字段而报错，目的字段未被SELECT并不因此报错；Unsafe仅跳过该检查；fixBound未找到VALUES/闭括号返回原串而非提前报错。",
              "excerpts": [
                {
                  "label": "3.3-Safe Mapping and Ambiguous Columns.md:3",
                  "quote": "sqlx uses safe struct mapping by default. When a query returns a column that cannot be associated with a destination field, the scan fails instead of silently discarding that value. An explicit Unsafe wrapper disables only this missing-field check. It does not bypass pointer validation, result cardinality, scalar column-count rules, driver conversions, context errors, or resource handling."
                },
                {
                  "label": "2.3-Named Parameters and Batch Execution.md:67",
                  "quote": "`bindNamedMapper` inspects the indirect argument kind. Maps are bound as a single record, arrays and slices are sent to `bindArray`, and other values are treated as structs [named.go:L406-L435](). Batch handling first compiles the named query to question-mark form, then requires a non-empty collection. It binds the first element to establish the argument count and appends values from each remaining element in record order [named.go:L273-L304]().\n\nWhen the collection has multiple records, `fixBound` locates the `VALUES` tuple in the compiled statement and repeats that parenthesized group, separated by commas, once per additional record [named.go:L225-L271](). This keeps SQL placeholder count synchronized with the flattened argument list. After expansion, a non-question target is passed through `Rebind`, so numbered drivers receive final numbering across every repeated tuple [named.go:L301-L325]().\n\nThe batch algorithm is deliberately tied to a `VALUES (...)` shape rather than being a general SQL repetition engine. Failure to find or parse the tuple produces an error rather than silently generating mismatched SQL. The caller also cannot bind an empty collection, because there would be neither a template record nor a valid argument sequence from which to construct the statement [named.go:L273-L300]()."
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:618",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L618"
                },
                {
                  "label": "named.go:245",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L245"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "yes",
              "finding": "明确Connect先Open/Ping，Ping失败关闭新建DB，错误时不暴露可用wrapper；符合源实现的资源顺序。",
              "checkpoint": "Connect先Open再Ping；Open失败不继续Ping，Ping失败须Close并返回nil,error。扫描缓存/关闭说明作为相关上下文，不替代这条初始化/清理顺序。",
              "excerpts": [
                {
                  "label": "1.2-Handle Lifecycles and Context.md:7",
                  "quote": "`Open` wraps `sql.Open`, records the driver name, and assigns the current mapper without establishing a connection. `Connect` builds on Open and calls Ping before returning, closing the database on failure [sqlx.go:L250-L290]. `NewDb` adapts an existing `*sql.DB`, which is useful when ownership or configuration originates outside sqlx. These constructors distinguish pool creation from connectivity validation in the same way as `database/sql`."
                },
                {
                  "label": "1.2-Handle Lifecycles and Context.md:66",
                  "quote": "Construction errors are returned before a wrapper is exposed. Connect closes a newly opened database when Ping fails, preparation returns compiler or driver errors without a usable statement, and Begin methods return no transaction on failure. Once rows exist, collection helpers defer Close so scan failures do not leak resources. One-row helpers also close their internal rows after the scan attempt."
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "给出命名/批量执行链，但宣称VALUES不能扩展必在联系driver前失败；真实绑定可携原查询与展平参数继续进入Exec。",
              "checkpoint": "NamedExec→bindNamedMapper按实参类型分派→bindArray先编译QUESTION并取参→fixBound→必要时Rebind→e.Exec；区分生产named.go调用链与sqlx_test.go的Schema适配，不虚构预驱动错误。",
              "excerpts": [
                {
                  "label": "2.3-Named Parameters and Batch Execution.md:67",
                  "quote": "`bindNamedMapper` inspects the indirect argument kind. Maps are bound as a single record, arrays and slices are sent to `bindArray`, and other values are treated as structs [named.go:L406-L435](). Batch handling first compiles the named query to question-mark form, then requires a non-empty collection. It binds the first element to establish the argument count and appends values from each remaining element in record order [named.go:L273-L304]().\n\nWhen the collection has multiple records, `fixBound` locates the `VALUES` tuple in the compiled statement and repeats that parenthesized group, separated by commas, once per additional record [named.go:L225-L271](). This keeps SQL placeholder count synchronized with the flattened argument list. After expansion, a non-question target is passed through `Rebind`, so numbered drivers receive final numbering across every repeated tuple [named.go:L301-L325]().\n\nThe batch algorithm is deliberately tied to a `VALUES (...)` shape rather than being a general SQL repetition engine. Failure to find or parse the tuple produces an error rather than silently generating mismatched SQL. The caller also cannot bind an empty collection, because there would be neither a template record nor a valid argument sequence from which to construct the statement [named.go:L273-L300]()."
                },
                {
                  "label": "2.3-Named Parameters and Batch Execution.md:75",
                  "quote": "Named execution is designed to fail before contacting the driver when query syntax cannot be compiled, a requested map key is absent, a struct traversal is missing, a batch is empty, or a `VALUES` tuple cannot be expanded. Prepared and one-shot paths preserve these same binding errors, although `QueryRow` represents them through the returned row because it cannot return a separate error at construction time [named.go:L41-L67]()."
                }
              ],
              "sources": [
                {
                  "label": "named.go:245",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L245"
                },
                {
                  "label": "named.go:293",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L293"
                },
                {
                  "label": "named.go:451",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L451"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到原生打包的 prefix、显式缺口、suffix 与匹配答案；实际实现代码本身不等同补全题。",
              "checkpoint": "完整原始Wiki是否已有prefix、显式缺口、suffix、参考答案成套对象；仅实现、代码省略号或示例不算补全题。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "描述测试范围和应增加精确输出断言，但所选绑定/safe扫描材料未展开具体查询、实参与预期的成型样例；未用其它类型转换例替代此检查。",
              "checkpoint": "Rebind/In/批绑定或safe扫描的具体查询/实参与明确预期输出、结果数量或断言成对；测试文件名、条件清单和建议本身不足。",
              "excerpts": [
                {
                  "label": "5.1-Unit and Driver-backed Test Strategy.md:90",
                  "quote": "A deterministic rewriting change should add a table-driven input and exact output. A mapper change should assert integer traversals and a StructScan result. A wrapper or context change should include a schema-backed case demonstrating ownership, error timing, and state propagation. A new value adapter should test supported inputs, invalid inputs, empty values, ownership, and a round trip."
                }
              ],
              "sources": [
                {
                  "label": "sqlx_test.go:1507",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L1507"
                },
                {
                  "label": "sqlx_test.go:264",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L264"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到带具体执行上下文的样例运行记录；源码测试说明、CI检查清单或泛化性能描述不算实际执行。",
              "checkpoint": "带例子与执行上下文的实际记录；对所有工具同查BenchmarkBindSpeed及11/50.8/27.5 ns/op。可溯历史数字但Wiki未载上下文为partial，明确非本轮实测；测试/CI定义不是记录。",
              "excerpts": [
                {
                  "label": "5.3-Hot-path Design and Benchmarks.md:79",
                  "quote": "The benchmark suite measures individual hot operations rather than database latency. `BenchmarkBindSpeed` measures repeated driver bind-type resolution [bind_test.go:L43-L57]. Main-package benchmarks compare struct and map named binding, ordinary and large `In` calls, common integer and string slice paths, and optimized versus buffer-based Rebind [sqlx_test.go:L1735-L1855]."
                }
              ],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "fix",
              "finding": "Connect段落把源码定位到sqlx.go:250-290，那里是NewDb/Open/Rebind等而非Connect；实际Connect在640-651。其它正确定位不能消除该误导范围。",
              "checkpoint": "Wiki自带指针能否把所检接口、变换、边界与测试追到固定源码文件及符号/行号；不以审计者补加来源代替Wiki自身来源。",
              "excerpts": [
                {
                  "label": "1.2-Handle Lifecycles and Context.md:7",
                  "quote": "`Open` wraps `sql.Open`, records the driver name, and assigns the current mapper without establishing a connection. `Connect` builds on Open and calls Ping before returning, closing the database on failure [sqlx.go:L250-L290]. `NewDb` adapts an existing `*sql.DB`, which is useful when ownership or configuration originates outside sqlx. These constructors distinguish pool creation from connectivity validation in the same way as `database/sql`."
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:250",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L250"
                },
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "devinwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "partial",
              "finding": "Rebind/Connect主要提供调用例和算法图；未找到所选生产函数的连续实现体。独立JSONData/事务使用例不替代这些核心实现。",
              "checkpoint": "Rebind、Connect 及所选安全扫描路径/isUnsafe 的实际连续实现上下文；不能以使用例或流程图替代，合并Go type-switch case后访问interface字段等误写须修正。",
              "excerpts": [
                {
                  "label": "wiki.json:84",
                  "quote": "The `Rebind` function is one of the core utilities provided by SQLx's parameter binding system. It converts queries written with standard question mark (`?`) placeholders to the appropriate syntax for the target database:\n\n```mermaid\nsequenceDiagram\n    participant App as \"Application\"\n    participant Rebind as \"sqlx.Rebind()\"\n    participant DB as \"Database\"\n    \n    App->>Rebind: \"SELECT * FROM users WHERE id = ?\"\n    Note over Rebind: Convert ? to database-specific syntax\n    alt PostgreSQL\n        Rebind->>App: \"SELECT * FROM users WHERE id = $1\"\n    else MySQL/SQLite\n        Rebind->>App: \"SELECT * FROM users WHERE id = ?\"\n    else Oracle\n        Rebind->>App: \"SELECT * FROM users WHERE id = :arg1\"\n    else SQL Server\n        Rebind->>App: \"SELECT * FROM users WHERE id = @p1\"\n    end\n    App->>DB: Execute rebound query\n```\n\nThe `Rebind` function iterates through the query string, finding each `?` placeholder and replacing it with the appropriate syntax based on the specified bind type.\n\nSources: [bind.go:59-90](), [sqlx_test.go:1318-1357]()"
                },
                {
                  "label": "wiki.json:126",
                  "quote": "2. **sqlx.Connect()**:\n   - Calls sqlx.Open() and then db.Ping()\n   - Establishes and verifies a connection\n   - Returns an error if the connection cannot be established\n   - Recommended for most applications\n\nSources: [README.md:109-114]()"
                }
              ],
              "sources": [
                {
                  "label": "bind.go:60",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/bind.go#L60"
                },
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                },
                {
                  "label": "sqlx.go:109",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L109"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "Advanced Features写 db := sqlx.Connect(...)，只接一个返回值，无法按真实两值签名使用；Overview的正确db,err例保留。",
              "checkpoint": "Connect(driverName,dataSourceName) 返回 (*DB,error)，有效调用需处理两值；MustConnect 返回一个 *DB 并在错误时panic，不能写成返回error。",
              "excerpts": [
                {
                  "label": "wiki.json:38",
                  "quote": "Unsafe mode can be activated on any SQLx type:\n\n```go\ndb := sqlx.Connect(\"postgres\", \"...\")\nunsafeDB := db.Unsafe()\n\n// Or on a transaction\ntx := db.MustBegin()\nunsafeTx := tx.Unsafe()\n\n// Or on a prepared statement\nstmt, _ := db.Preparex(\"...\")\nunsafeStmt := stmt.Unsafe()\n```"
                },
                {
                  "label": "wiki.json:202",
                  "quote": "| `Connect`   | Open connection and ping to verify                 | `db, err := sqlx.Connect(\"postgres\", connStr)` |"
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                },
                {
                  "label": "sqlx.go:654",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L654"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "fix",
              "finding": "占位符与In正例可保留，但把测试中Schema的方言适配提升为SQLx API通用SQL Dialect Handling层。原文也写测试示范，形成层级混淆；仅列出分页差异的条目不单独当错误。",
              "checkpoint": "Rebind的QUESTION/UNKNOWN原样返回与DOLLAR/NAMED/AT输出；生产fixBound复制VALUES组、未匹配/未闭合时返回原串；Schema的引号/时间函数改写只在测试，不是自动SQL方言/分页转换层。",
              "excerpts": [
                {
                  "label": "wiki.json:155",
                  "quote": "## SQL Dialect Differences\n\nSQLx helps handle common SQL dialect differences, such as:\n\n1. **Quote characters**: MySQL uses backticks (\\`), while most other databases use double quotes (\")\n2. **Date/time functions**: Different syntax for timestamp functions (`NOW()` vs `CURRENT_TIMESTAMP`)\n3. **Case sensitivity**: Different handling of identifier case\n\nThe test suite demonstrates handling these differences:\n\n```mermaid\nflowchart LR\n    A[\"SQL Query\"] --> B{\"Database Type\"}\n    B -->|\"PostgreSQL\"| C[\"Use double quotes\\nfor identifiers\"]\n    B -->|\"MySQL\"| D[\"Replace quotes\\nwith backticks\"]\n    B -->|\"SQLite\"| E[\"Replace now()\\nwith CURRENT_TIMESTAMP\"]\n    \n    C --> F[\"Execute Query\"]\n    D --> F\n    E --> F\n```\n\nSources: [sqlx_test.go:100-110](), [sqlx_test.go:247-255](), [sqlx_test.go:678-686]()"
                },
                {
                  "label": "wiki.json:321",
                  "quote": "## Summary\n\nSQLx provides robust cross-database compatibility through:\n\n1. **Automatic parameter binding** based on the database driver\n2. **SQL dialect adaptation** for common differences\n3. **Slice expansion** for IN clauses\n4. **Testing utilities** for verifying code against multiple databases\n\nBy using these features, you can write database code that works consistently across different database systems while still being able to leverage database-specific features when needed."
                }
              ],
              "sources": [
                {
                  "label": "sqlx_test.go:100",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L100"
                },
                {
                  "label": "bind.go:60",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/bind.go#L60"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "fix",
              "finding": "Best Practices把safe条件写反：声称目的struct的added_at没出现在SELECT中就报错。真正错误是返回列无对应目的字段；其它章节正确说明不能覆盖该反例。",
              "checkpoint": "safe扫描只因结果列无目的字段而报错，目的字段未被SELECT并不因此报错；Unsafe仅跳过该检查；fixBound未找到VALUES/闭括号返回原串而非提前报错。",
              "excerpts": [
                {
                  "label": "wiki.json:240",
                  "quote": "### Safe vs. Unsafe Mode\n\nSQLx's default \"safe\" mode requires all destination fields to have a source in the query results:\n\n```go\ntype Person struct {\n    FirstName string    `db:\"first_name\"`\n    LastName  string    `db:\"last_name\"`\n    Email     string    `db:\"email\"`\n    AddedAt   time.Time `db:\"added_at\"`\n}\n\n// This will return an error if the query doesn't include the added_at column\nerr := db.Get(&person, \"SELECT first_name, last_name, email FROM person\")\n\n// To allow partial scanning:\ndb = db.Unsafe()\nerr := db.Get(&person, \"SELECT first_name, last_name, email FROM person\")\n// Now works even though added_at isn't in the result set"
                },
                {
                  "label": "wiki.json:174",
                  "quote": "### Safe vs. Unsafe Scanning\n\nBy default, SQLx requires all result columns to have corresponding struct fields. In \"unsafe\" mode, SQLx silently ignores columns that don't map to struct fields:\n\n```go\n// Will error if database returns columns not in the struct\nerr := db.Get(&person, \"SELECT * FROM person\")\n\n// Will ignore extra columns\nerr := db.Unsafe().Get(&person, \"SELECT * FROM person\")"
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:780",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L780"
                },
                {
                  "label": "sqlx.go:618",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L618"
                },
                {
                  "label": "sqlx_test.go:267",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L267"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "partial",
              "finding": "说明Connect先Open再Ping并返回错误，但未给出Ping失败关闭新DB的清理动作；一般defer Close或其它扫描缓存说明不替代该边界。",
              "checkpoint": "Connect先Open再Ping；Open失败不继续Ping，Ping失败须Close并返回nil,error。扫描缓存/关闭说明作为相关上下文，不替代这条初始化/清理顺序。",
              "excerpts": [
                {
                  "label": "wiki.json:126",
                  "quote": "2. **sqlx.Connect()**:\n   - Calls sqlx.Open() and then db.Ping()\n   - Establishes and verifies a connection\n   - Returns an error if the connection cannot be established\n   - Recommended for most applications\n\nSources: [README.md:109-114]()"
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "跨数据库图把SQL Dialect Handling挂在SQLx API下并接到各driver；相关引号/时间适配却来自测试Schema，而非NamedExec生产调用链。",
              "checkpoint": "NamedExec→bindNamedMapper按实参类型分派→bindArray先编译QUESTION并取参→fixBound→必要时Rebind→e.Exec；区分生产named.go调用链与sqlx_test.go的Schema适配，不虚构预驱动错误。",
              "excerpts": [
                {
                  "label": "wiki.json:24",
                  "quote": "```mermaid\nflowchart TD\n    subgraph \"SQLx Cross-Database Layer\"\n        A[\"Application Code\"]\n        B[\"SQLx API\"]\n        C[\"Parameter Binding System\"]\n        D[\"SQL Dialect Handling\"]\n    end\n    \n    subgraph \"Database Drivers\"\n        E[\"PostgreSQL\"]\n        F[\"MySQL\"]\n        G[\"SQLite\"]\n        H[\"Oracle\"]\n        I[\"SQL Server\"]\n    end\n    \n    A --> B\n    B --> C\n    B --> D\n    C --> E\n    C --> F\n    C --> G\n    C --> H\n    C --> I\n    D --> E\n    D --> F\n    D --> G\n    D --> H\n    D --> I\n```\n\nSources: [bind.go:15-41](), [sqlx_test.go:54-92]()"
                },
                {
                  "label": "wiki.json:155",
                  "quote": "## SQL Dialect Differences\n\nSQLx helps handle common SQL dialect differences, such as:\n\n1. **Quote characters**: MySQL uses backticks (\\`), while most other databases use double quotes (\")\n2. **Date/time functions**: Different syntax for timestamp functions (`NOW()` vs `CURRENT_TIMESTAMP`)\n3. **Case sensitivity**: Different handling of identifier case\n\nThe test suite demonstrates handling these differences:\n\n```mermaid\nflowchart LR\n    A[\"SQL Query\"] --> B{\"Database Type\"}\n    B -->|\"PostgreSQL\"| C[\"Use double quotes\\nfor identifiers\"]\n    B -->|\"MySQL\"| D[\"Replace quotes\\nwith backticks\"]\n    B -->|\"SQLite\"| E[\"Replace now()\\nwith CURRENT_TIMESTAMP\"]\n    \n    C --> F[\"Execute Query\"]\n    D --> F\n    E --> F\n```\n\nSources: [sqlx_test.go:100-110](), [sqlx_test.go:247-255](), [sqlx_test.go:678-686]()"
                }
              ],
              "sources": [
                {
                  "label": "named.go:451",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L451"
                },
                {
                  "label": "named.go:273",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L273"
                },
                {
                  "label": "sqlx_test.go:100",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L100"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到原生打包的 prefix、显式缺口、suffix 与匹配答案；实际实现代码本身不等同补全题。",
              "checkpoint": "完整原始Wiki是否已有prefix、显式缺口、suffix、参考答案成套对象；仅实现、代码省略号或示例不算补全题。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "fix",
              "finding": "虽然有正确In输入/输出例，safe扫描例明确把缺少SELECT added_at配成错误预期；该测试期望与源码相反，必须修正。",
              "checkpoint": "Rebind/In/批绑定或safe扫描的具体查询/实参与明确预期输出、结果数量或断言成对；测试文件名、条件清单和建议本身不足。",
              "excerpts": [
                {
                  "label": "wiki.json:240",
                  "quote": "### Safe vs. Unsafe Mode\n\nSQLx's default \"safe\" mode requires all destination fields to have a source in the query results:\n\n```go\ntype Person struct {\n    FirstName string    `db:\"first_name\"`\n    LastName  string    `db:\"last_name\"`\n    Email     string    `db:\"email\"`\n    AddedAt   time.Time `db:\"added_at\"`\n}\n\n// This will return an error if the query doesn't include the added_at column\nerr := db.Get(&person, \"SELECT first_name, last_name, email FROM person\")\n\n// To allow partial scanning:\ndb = db.Unsafe()\nerr := db.Get(&person, \"SELECT first_name, last_name, email FROM person\")\n// Now works even though added_at isn't in the result set"
                },
                {
                  "label": "wiki.json:124",
                  "quote": "```go\nquery := \"SELECT * FROM users WHERE id IN (?)\"\nids := []int{1, 2, 3}\nnewQuery, args, err := sqlx.In(query, ids)\n// newQuery becomes: \"SELECT * FROM users WHERE id IN (?, ?, ?)\"\n// args becomes: [1, 2, 3]\n```\n\nThis function is particularly useful when dealing with dynamic lists or arrays that need to be used in an `IN` clause. It automatically handles the expansion for you.\n\nSources: [bind.go:142-244](), [sqlx_test.go:1507-1605]()"
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:780",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L780"
                },
                {
                  "label": "sqlx_test.go:267",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L267"
                },
                {
                  "label": "bind.go:139",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/bind.go#L139"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到带具体执行上下文的样例运行记录；源码测试说明、CI检查清单或泛化性能描述不算实际执行。",
              "checkpoint": "带例子与执行上下文的实际记录；对所有工具同查BenchmarkBindSpeed及11/50.8/27.5 ns/op。可溯历史数字但Wiki未载上下文为partial，明确非本轮实测；测试/CI定义不是记录。",
              "excerpts": [
                {
                  "label": "wiki.json:245",
                  "quote": "\nWhen submitting a pull request, ensure that:\n\n1. Your code passes all tests on all supported databases\n2. Your code passes all linting and formatting checks\n3. You've added tests for any new functionality"
                }
              ],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "所检Rebind及safe例有Wiki自带具体文件/行指针，能定位并复核其正误；指向测试文件暴露了层级混淆，但不是缺少出处。",
              "checkpoint": "Wiki自带指针能否把所检接口、变换、边界与测试追到固定源码文件及符号/行号；不以审计者补加来源代替Wiki自身来源。",
              "excerpts": [
                {
                  "label": "wiki.json:84",
                  "quote": "The `Rebind` function is one of the core utilities provided by SQLx's parameter binding system. It converts queries written with standard question mark (`?`) placeholders to the appropriate syntax for the target database:\n\n```mermaid\nsequenceDiagram\n    participant App as \"Application\"\n    participant Rebind as \"sqlx.Rebind()\"\n    participant DB as \"Database\"\n    \n    App->>Rebind: \"SELECT * FROM users WHERE id = ?\"\n    Note over Rebind: Convert ? to database-specific syntax\n    alt PostgreSQL\n        Rebind->>App: \"SELECT * FROM users WHERE id = $1\"\n    else MySQL/SQLite\n        Rebind->>App: \"SELECT * FROM users WHERE id = ?\"\n    else Oracle\n        Rebind->>App: \"SELECT * FROM users WHERE id = :arg1\"\n    else SQL Server\n        Rebind->>App: \"SELECT * FROM users WHERE id = @p1\"\n    end\n    App->>DB: Execute rebound query\n```\n\nThe `Rebind` function iterates through the query string, finding each `?` placeholder and replacing it with the appropriate syntax based on the specified bind type.\n\nSources: [bind.go:59-90](), [sqlx_test.go:1318-1357]()"
                },
                {
                  "label": "wiki.json:266",
                  "quote": "Sources: [sqlx_test.go:262-376]()"
                }
              ],
              "sources": [
                {
                  "label": "bind.go:60",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/bind.go#L60"
                },
                {
                  "label": "sqlx_test.go:264",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L264"
                },
                {
                  "label": "sqlx_test.go:100",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L100"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "deepwiki-open": {
          "available": true,
          "cells": {
            "A": {
              "status": "yes",
              "finding": "提供完整Rebind以及Connect实现体，有变量初始化、分支、循环和返回；isUnsafe省略片段没有合并case导致的字段访问错误。",
              "checkpoint": "Rebind、Connect 及所选安全扫描路径/isUnsafe 的实际连续实现上下文；不能以使用例或流程图替代，合并Go type-switch case后访问interface字段等误写须修正。",
              "excerpts": [
                {
                  "label": "wiki.md:4887",
                  "quote": "func Rebind(bindType int, query string) string {\n    switch bindType {\n    case QUESTION, UNKNOWN:\n        return query\n    }\n\n    rqb := make([]byte, 0, len(query)+10)\n    var i, j int\n\n    for i = strings.Index(query, \"?\"); i != -1; i = strings.Index(query, \"?\") {\n        rqb = append(rqb, query[:i]...)\n\n        switch bindType {\n        case DOLLAR:\n            rqb = append(rqb, '$')\n        case NAMED:\n            rqb = append(rqb, ':', 'a', 'r', 'g')\n        case AT:\n            rqb = append(rqb, '@', 'p')\n        }\n\n        j++\n        rqb = strconv.AppendInt(rqb, int64(j), 10)\n        query = query[i+1:]\n    }\n\n    return string(append(rqb, query...))\n}\n```\n\nSources: [bind.go:56-86]()"
                },
                {
                  "label": "wiki.md:343",
                  "quote": "func Connect(driverName, dataSourceName string) (*DB, error) {\n    db, err := Open(driverName, dataSourceName)\n    if err != nil {\n        return nil, err\n    }\n    err = db.Ping()\n    if err != nil {\n        db.Close()\n        return nil, err\n    }\n    return db, nil\n}\n\n// MustConnect connects to a database and panics on error\nfunc MustConnect(driverName, dataSourceName string) *DB {\n    db, err := Connect(driverName, dataSourceName)\n    if err != nil {\n        panic(err)\n    }\n    return db\n}\n```\n\nSources: [sqlx.go:630-660]()"
                }
              ],
              "sources": [
                {
                  "label": "bind.go:60",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/bind.go#L60"
                },
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "yes",
              "finding": "Connect函数体及调用时序明确两个string参数、(*DB,error)两值和成功/失败返回；MustConnect单值/panic也正确。",
              "checkpoint": "Connect(driverName,dataSourceName) 返回 (*DB,error)，有效调用需处理两值；MustConnect 返回一个 *DB 并在错误时panic，不能写成返回error。",
              "excerpts": [
                {
                  "label": "wiki.md:343",
                  "quote": "func Connect(driverName, dataSourceName string) (*DB, error) {\n    db, err := Open(driverName, dataSourceName)\n    if err != nil {\n        return nil, err\n    }\n    err = db.Ping()\n    if err != nil {\n        db.Close()\n        return nil, err\n    }\n    return db, nil\n}\n\n// MustConnect connects to a database and panics on error\nfunc MustConnect(driverName, dataSourceName string) *DB {\n    db, err := Connect(driverName, dataSourceName)\n    if err != nil {\n        panic(err)\n    }\n    return db\n}\n```\n\nSources: [sqlx.go:630-660]()"
                },
                {
                  "label": "wiki.md:378",
                  "quote": "    U->>+C: Connect(driver, dsn)\n    C->>+O: Open(driver, dsn)\n    O-->>-C: *DB\n    C->>+P: db.Ping()\n    P-->>-C: error/nil\n    alt Ping fails\n        C->>C: Close DB\n        C-->>U: return nil, err\n    else Ping succeeds\n        C-->>-U: return db, nil"
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                },
                {
                  "label": "sqlx.go:654",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L654"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "partial",
              "finding": "Rebind三种输出和生产VALUES扩展说明正确；缺少明确区分Schema引号/时间函数仅属测试及非通用方言/分页改写的边界材料。",
              "checkpoint": "Rebind的QUESTION/UNKNOWN原样返回与DOLLAR/NAMED/AT输出；生产fixBound复制VALUES组、未匹配/未闭合时返回原串；Schema的引号/时间函数改写只在测试，不是自动SQL方言/分页转换层。",
              "excerpts": [
                {
                  "label": "wiki.md:2562",
                  "quote": "For `DOLLAR` type, each `?` becomes `$1`, `$2`, etc. For `NAMED` type, each becomes `:arg1`, `:arg2`, etc. For `AT` type, each becomes `@p1`, `@p2`, etc. The function is optimized to pre-allocate a buffer with space for 10 parameters.\n\nSources: [bind.go:41-70]()"
                },
                {
                  "label": "wiki.md:2833",
                  "quote": "The `named.go` file includes special handling for batch inserts with `VALUES` clauses. The `fixBound` function adjusts the bound query when multiple structs or maps are being inserted:"
                }
              ],
              "sources": [
                {
                  "label": "bind.go:60",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/bind.go#L60"
                },
                {
                  "label": "named.go:245",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L245"
                },
                {
                  "label": "sqlx_test.go:100",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L100"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "partial",
              "finding": "safe结果列检查方向正确，fixBound片段也保留找不到VALUES时原串返回；但省略未闭合括号的另一回退及后续可到driver的边界。",
              "checkpoint": "safe扫描只因结果列无目的字段而报错，目的字段未被SELECT并不因此报错；Unsafe仅跳过该检查；fixBound未找到VALUES/闭括号返回原串而非提前报错。",
              "excerpts": [
                {
                  "label": "wiki.md:2067",
                  "quote": "The scanning system validates that all database columns have corresponding struct fields:\n\n```go\nif f, err := missingFields(r.fields); err != nil && !r.unsafe {\n    return fmt.Errorf(\"missing destination name %s in %T\", columns[f], dest)\n}\n```\n\n### Unsafe Mode\n\nThe `Unsafe()` method creates a version of the DB/Tx/Stmt that silently ignores missing fields:\n\n| Mode | Behavior |\n|------|----------|\n| Safe (default) | Returns error on missing destination fields |\n| Unsafe | Silently skips columns without matching struct fields |\n\nSources: [sqlx.go:606-697](), [sqlx.go:356-444]()"
                },
                {
                  "label": "wiki.md:2854",
                  "quote": "func fixBound(bound string, loop int) string {\n    loc := valuesReg.FindStringIndex(bound)\n    if len(loc) < 2 {\n        return bound\n    }\n    openingBracketIndex := loc[1] - 1\n    index := findMatchingClosingBracketIndex(bound[openingBracketIndex:])\n    // ... implementation\n}\n```\n\nSources: [named.go:208-254]()"
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:618",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L618"
                },
                {
                  "label": "named.go:245",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L245"
                },
                {
                  "label": "named.go:293",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L293"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "yes",
              "finding": "完整Connect代码和时序均包含Open错误短路、Ping失败Close、返回nil/error以及成功返回DB，资源动作顺序正确。",
              "checkpoint": "Connect先Open再Ping；Open失败不继续Ping，Ping失败须Close并返回nil,error。扫描缓存/关闭说明作为相关上下文，不替代这条初始化/清理顺序。",
              "excerpts": [
                {
                  "label": "wiki.md:343",
                  "quote": "func Connect(driverName, dataSourceName string) (*DB, error) {\n    db, err := Open(driverName, dataSourceName)\n    if err != nil {\n        return nil, err\n    }\n    err = db.Ping()\n    if err != nil {\n        db.Close()\n        return nil, err\n    }\n    return db, nil\n}\n\n// MustConnect connects to a database and panics on error\nfunc MustConnect(driverName, dataSourceName string) *DB {\n    db, err := Connect(driverName, dataSourceName)\n    if err != nil {\n        panic(err)\n    }\n    return db\n}\n```\n\nSources: [sqlx.go:630-660]()"
                },
                {
                  "label": "wiki.md:378",
                  "quote": "    U->>+C: Connect(driver, dsn)\n    C->>+O: Open(driver, dsn)\n    O-->>-C: *DB\n    C->>+P: db.Ping()\n    P-->>-C: error/nil\n    alt Ping fails\n        C->>C: Close DB\n        C-->>U: return nil, err\n    else Ping succeeds\n        C-->>-U: return db, nil"
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "partial",
              "finding": "有批插入取参→扩展VALUES→执行的关系图和相关源文件，但未展开bindNamedMapper→bindArray→QUESTION编译→最终Rebind等完整分派链，也未交代Schema测试层。",
              "checkpoint": "NamedExec→bindNamedMapper按实参类型分派→bindArray先编译QUESTION并取参→fixBound→必要时Rebind→e.Exec；区分生产named.go调用链与sqlx_test.go的Schema适配，不虚构预驱动错误。",
              "excerpts": [
                {
                  "label": "wiki.md:2903",
                  "quote": "```mermaid\ngraph TD\n    A[Batch Insert Request] --> B{Argument Type}\n    B -->|Struct Slice| C[Compile Named Query]\n    B -->|Map Slice| C\n    C --> D[Process Each Element]\n    D --> E[Extract Field Values]\n    E --> F[Build Arg List]\n    F --> G[Fix Bound Query for Multiple Rows]\n    G --> H[Execute Insert]\n```\n\nSources: [named.go:208-254](), [named_test.go:190-230]()"
                },
                {
                  "label": "wiki.md:2833",
                  "quote": "The `named.go` file includes special handling for batch inserts with `VALUES` clauses. The `fixBound` function adjusts the bound query when multiple structs or maps are being inserted:"
                }
              ],
              "sources": [
                {
                  "label": "named.go:421",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L421"
                },
                {
                  "label": "named.go:273",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L273"
                },
                {
                  "label": "named.go:451",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L451"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到原生打包的 prefix、显式缺口、suffix 与匹配答案；实际实现代码本身不等同补全题。",
              "checkpoint": "完整原始Wiki是否已有prefix、显式缺口、suffix、参考答案成套对象；仅实现、代码省略号或示例不算补全题。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "yes",
              "finding": "TestIn表提供具体SQL、实参以及7/8/4/3等预期参数数目，包含[]byte不展开的例；与原测试断言一致，不声称已运行。",
              "checkpoint": "Rebind/In/批绑定或safe扫描的具体查询/实参与明确预期输出、结果数量或断言成对；测试文件名、条件清单和建议本身不足。",
              "excerpts": [
                {
                  "label": "wiki.md:2660",
                  "quote": "| Test Case | Query | Args | Expected Args Count | Expected Behavior |\n|-----------|-------|------|---------------------|-------------------|\n| Normal | `SELECT * FROM foo WHERE x = ? AND v in (?) AND y = ?` | `\"foo\", []int{0,5,7,2,9}, \"bar\"` | 7 | Expands slice into 5 placeholders |\n| Simple IN | `SELECT * FROM foo WHERE x in (?)` | `[]int{1,2,3,4,5,6,7,8}` | 8 | Expands slice into 8 placeholders |\n| Byte Slice | `SELECT * FROM foo WHERE x = ? AND y in (?)` | `[]byte(\"foo\"), []int{0,5,3}` | 4 | Does not expand `[]byte`, expands int slice |\n| NullString | `SELECT * FROM foo WHERE x = ? AND y IN (?)` | `sql.NullString{Valid:false}, []string{\"a\",\"b\"}` | 3 | Handles non-slice first arg, expands string slice |\n\nSources: [sqlx_test.go:1528-1558]()"
                }
              ],
              "sources": [
                {
                  "label": "sqlx_test.go:1514",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L1514"
                },
                {
                  "label": "sqlx_test.go:1528",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L1528"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "missing",
              "finding": "未找到带具体执行上下文的样例运行记录；源码测试说明、CI检查清单或泛化性能描述不算实际执行。",
              "checkpoint": "带例子与执行上下文的实际记录；对所有工具同查BenchmarkBindSpeed及11/50.8/27.5 ns/op。可溯历史数字但Wiki未载上下文为partial，明确非本轮实测；测试/CI定义不是记录。",
              "excerpts": [
                {
                  "label": "wiki.md:3817",
                  "quote": "## Testing and Validation\n\nThe context-aware operations are thoroughly tested across multiple database drivers. The test infrastructure uses a schema-based approach with `RunWithSchemaContext`."
                }
              ],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "partial",
              "finding": "核心Connect/Rebind可按Wiki指针找到；部分附着范围偏短或偏后，如Rebind输出说明指到41-70、TestIn输入表指到1528-1558，未覆盖完整被引片段。",
              "checkpoint": "Wiki自带指针能否把所检接口、变换、边界与测试追到固定源码文件及符号/行号；不以审计者补加来源代替Wiki自身来源。",
              "excerpts": [
                {
                  "label": "wiki.md:2559",
                  "quote": "\nSources: [bind.go:41-70]()\n\nFor `DOLLAR` type, each `?` becomes `$1`, `$2`, etc. For `NAMED` type, each becomes `:arg1`, `:arg2`, etc. For `AT` type, each becomes `@p1`, `@p2`, etc. The function is optimized to pre-allocate a buffer with space for 10 parameters.\n\nSources: [bind.go:41-70]()"
                },
                {
                  "label": "wiki.md:343",
                  "quote": "func Connect(driverName, dataSourceName string) (*DB, error) {\n    db, err := Open(driverName, dataSourceName)\n    if err != nil {\n        return nil, err\n    }\n    err = db.Ping()\n    if err != nil {\n        db.Close()\n        return nil, err\n    }\n    return db, nil\n}\n\n// MustConnect connects to a database and panics on error\nfunc MustConnect(driverName, dataSourceName string) *DB {\n    db, err := Connect(driverName, dataSourceName)\n    if err != nil {\n        panic(err)\n    }\n    return db\n}\n```\n\nSources: [sqlx.go:630-660]()"
                }
              ],
              "sources": [
                {
                  "label": "bind.go:60",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/bind.go#L60"
                },
                {
                  "label": "sqlx_test.go:1514",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L1514"
                },
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "openwiki": {
          "available": true,
          "cells": {
            "A": {
              "status": "fix",
              "finding": "isUnsafe代码把NamedStmt/*NamedStmt等类型合到同一case，却继续访问v.Stmt/v.unsafe；多类型case的v仍为interface{}，片段不是有效的原实现。",
              "checkpoint": "Rebind、Connect 及所选安全扫描路径/isUnsafe 的实际连续实现上下文；不能以使用例或流程图替代，合并Go type-switch case后访问interface字段等误写须修正。",
              "excerpts": [
                {
                  "label": "unsafe-mode.md:32",
                  "quote": "func isUnsafe(i interface{}) bool {\n\tswitch v := i.(type) {\n\tcase Row:\n\t\treturn v.unsafe\n\tcase *Row:\n\t\treturn v.unsafe\n\tcase Rows:\n\t\treturn v.unsafe\n\tcase *Rows:\n\t\treturn v.unsafe\n\tcase NamedStmt, *NamedStmt:\n\t\treturn v.Stmt.unsafe\n\tcase Stmt, *Stmt:\n\t\treturn v.unsafe\n\tcase qStmt, *qStmt:\n\t\treturn v.unsafe\n\tcase DB, *DB:\n\t\treturn v.unsafe\n\tcase Tx, *Tx:\n\t\treturn v.unsafe\n\tcase sql.Rows, *sql.Rows:\n\t\treturn false\n\tdefault:\n\t\treturn false\n\t}\n}"
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:109",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L109"
                }
              ],
              "correctionCase": null
            },
            "B": {
              "status": "fix",
              "finding": "把Connect/MustConnect并列描述为失败时returning an error；Connect返回(*DB,error)，MustConnect实际只返回*DB并panic。",
              "checkpoint": "Connect(driverName,dataSourceName) 返回 (*DB,error)，有效调用需处理两值；MustConnect 返回一个 *DB 并在错误时panic，不能写成返回error。",
              "excerpts": [
                {
                  "label": "core-types.md:98",
                  "quote": "- **`Connect` / `MustConnect`** (`sqlx.go#L640-L660`) build a `DB` via `Open` and additionally verify connectivity with `Ping`, closing and returning an error on failure. `ConnectContext` (`sqlx_context.go#L16-L23`) does the same with `PingContext`."
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                },
                {
                  "label": "sqlx.go:654",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L654"
                }
              ],
              "correctionCase": null
            },
            "C": {
              "status": "yes",
              "finding": "说明Rebind原样/各输出分支，生产fixBound复制VALUES与两种原串回退，并把引号/时间函数适配明确放在Schema测试fixture内。",
              "checkpoint": "Rebind的QUESTION/UNKNOWN原样返回与DOLLAR/NAMED/AT输出；生产fixBound复制VALUES组、未匹配/未闭合时返回原串；Schema的引号/时间函数改写只在测试，不是自动SQL方言/分页转换层。",
              "excerpts": [
                {
                  "label": "bindvar-system.md:61",
                  "quote": "`Rebind(bindType int, query string) string` (`bind.go#L59-L90`) transforms a query written with `?` placeholders into the target dialect. For `QUESTION` and `UNKNOWN` it is a **passthrough** — the query is returned unchanged (`bind.go#L61-L64`) because the input dialect already matches.\n\nFor the other dialects it scans the string left to right, locating each `?` with `strings.Index`, appending the text up to it, then writing the dialect's marker followed by a running 1-based parameter index:\n\n- **DOLLAR** → writes `$` then the index: `$1`, `$2`, ...\n- **NAMED** → writes `:arg` then the index: `:arg1`, `:arg2`, ...\n- **AT** → writes `@p` then the index: `@p1`, `@p2`, ...\n\nThe buffer is pre-sized to `len(query)+10` to avoid reallocation for small query counts. `TestRebind` (`sqlx_test.go#L1318-L1357`) verifies the exact output for DOLLAR, AT, and NAMED across multi-row, quoted-string cases."
                },
                {
                  "label": "named-queries.md:92",
                  "quote": "`bindArray` (`named.go#L273-L301`) supports bulk inserts from a slice or array of structs or maps. Its algorithm:\n\n1. Compile the query with `QUESTION` bind type regardless of the target type, record the name list, and record the slice length.\n2. An empty slice returns the error `\"length of array is 0: ...\"`.\n3. For each element, `bindAnyArgs` produces that element's argument list, which are concatenated into a single flat `arglist` sized `len(names) * arrayLen`.\n4. If there is more than one element, **`fixBound`** replicates the `VALUES(...)` clause `arrayLen` times so the parameter count matches the flattened argument list.\n5. If the original bind type was not `QUESTION`, the expanded query is rewritten at the end with `Rebind(bindType, bound)`.\n\n`fixBound(bound string, loop int)` (`named.go#L245-L269`) finds the `) VALUES (` token via the case-insensitive `valuesReg` regexp (`named.go#L227`), locates the matching closing bracket with `findMatchingClosingBracketIndex` (a bracket-depth counter, `named.go#L229-L243`), and repeats everything between the opening and closing bracket `loop-1` extra times, comma-separated, while preserving any SQL after the clause. It is defensive: if `VALUES (...)` or a closing bracket is not found, the query is returned unchanged. `fixBound` is exercised directly by `TestFixBounds` (`named_test.go#L305+`), which covers matching, trailers, lowercase `values`, `ON DUPLICATE KEY UPDATE ... VALUES(a)` collisions, nested function calls like `YEAR(NOW())`, and missing-bracket guard cases."
                }
              ],
              "sources": [
                {
                  "label": "bind.go:60",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/bind.go#L60"
                },
                {
                  "label": "named.go:245",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L245"
                },
                {
                  "label": "sqlx_test.go:100",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L100"
                }
              ],
              "correctionCase": null
            },
            "D": {
              "status": "yes",
              "finding": "safe条件以结果列缺目的字段为准；fixBound没有VALUES或闭括号就原样返回，不虚构提前error。代码块类型合并错误另记A，不改变此处条件文字的正确性。",
              "checkpoint": "safe扫描只因结果列无目的字段而报错，目的字段未被SELECT并不因此报错；Unsafe仅跳过该检查；fixBound未找到VALUES/闭括号返回原串而非提前报错。",
              "excerpts": [
                {
                  "label": "struct-scanning.md:112",
                  "quote": "- For a non-scannable struct, `m.TraversalsByName(v.Type(), columns)` maps each column to a field traversal. `missingFields` (`sqlx.go#L1047-L1054`) finds any column with an empty traversal, and if the value is **not** unsafe the scan fails with `missing destination name <column> in <T>` (`sqlx.go#L783`)."
                },
                {
                  "label": "named-queries.md:92",
                  "quote": "`bindArray` (`named.go#L273-L301`) supports bulk inserts from a slice or array of structs or maps. Its algorithm:\n\n1. Compile the query with `QUESTION` bind type regardless of the target type, record the name list, and record the slice length.\n2. An empty slice returns the error `\"length of array is 0: ...\"`.\n3. For each element, `bindAnyArgs` produces that element's argument list, which are concatenated into a single flat `arglist` sized `len(names) * arrayLen`.\n4. If there is more than one element, **`fixBound`** replicates the `VALUES(...)` clause `arrayLen` times so the parameter count matches the flattened argument list.\n5. If the original bind type was not `QUESTION`, the expanded query is rewritten at the end with `Rebind(bindType, bound)`.\n\n`fixBound(bound string, loop int)` (`named.go#L245-L269`) finds the `) VALUES (` token via the case-insensitive `valuesReg` regexp (`named.go#L227`), locates the matching closing bracket with `findMatchingClosingBracketIndex` (a bracket-depth counter, `named.go#L229-L243`), and repeats everything between the opening and closing bracket `loop-1` extra times, comma-separated, while preserving any SQL after the clause. It is defensive: if `VALUES (...)` or a closing bracket is not found, the query is returned unchanged. `fixBound` is exercised directly by `TestFixBounds` (`named_test.go#L305+`), which covers matching, trailers, lowercase `values`, `ON DUPLICATE KEY UPDATE ... VALUES(a)` collisions, nested function calls like `YEAR(NOW())`, and missing-bracket guard cases."
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:780",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L780"
                },
                {
                  "label": "named.go:245",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L245"
                }
              ],
              "correctionCase": null
            },
            "E": {
              "status": "yes",
              "finding": "就所选Connect流程明确Open→Ping→失败Close；并说明Rows首次建立遍历再复用。MustConnect错误返回形式另记B，不抹掉Connect顺序。",
              "checkpoint": "Connect先Open再Ping；Open失败不继续Ping，Ping失败须Close并返回nil,error。扫描缓存/关闭说明作为相关上下文，不替代这条初始化/清理顺序。",
              "excerpts": [
                {
                  "label": "core-types.md:98",
                  "quote": "- **`Connect` / `MustConnect`** (`sqlx.go#L640-L660`) build a `DB` via `Open` and additionally verify connectivity with `Ping`, closing and returning an error on failure. `ConnectContext` (`sqlx_context.go#L16-L23`) does the same with `PingContext`."
                },
                {
                  "label": "core-types.md:135",
                  "quote": "`Rows.StructScan(dest)` (`sqlx.go#L602-L637`) is the looped-struct variant. On the first call (`!r.started`) it reads the columns, builds `r.fields` via `r.Mapper.TraversalsByName`, checks for missing fields (if not `unsafe`), and allocates `r.values`. Subsequent calls reuse those cached fields, so per-row overhead drops to a `fieldsByTraversal` fill plus a `Scan`. `StructScan` on a `rowsi` (`sqlx.go#L1005-L1008`) delegates to `scanAll` with `structOnly=true`."
                }
              ],
              "sources": [
                {
                  "label": "sqlx.go:640",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L640"
                },
                {
                  "label": "sqlx.go:611",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L611"
                }
              ],
              "correctionCase": null
            },
            "F": {
              "status": "fix",
              "finding": "正文的bindNamedMapper分派及bindArray顺序正确，但端到端图反将compileNamedQuery放在bindNamedMapper之前；真实是dispatcher先选binder，再由binder编译。",
              "checkpoint": "NamedExec→bindNamedMapper按实参类型分派→bindArray先编译QUESTION并取参→fixBound→必要时Rebind→e.Exec；区分生产named.go调用链与sqlx_test.go的Schema适配，不虚构预驱动错误。",
              "excerpts": [
                {
                  "label": "named-queries.md:158",
                  "quote": "    A[\"DriverName\"] --> B[\"BindType\"]\n    B --> C[\"compileNamedQuery : bindType, query\"]\n    C --> D[\"rebound query + names\"]\n    D --> E[\"bindNamedMapper: arg kind\"]\n    E -->|\"map[string]iface\"| F[\"bindMap / bindMapArgs\"]\n    E -->|\"slice/array\"| G[\"bindArray (fixBound replicates VALUES)\"]\n    E -->|\"struct\"| H[\"bindStruct / bindAnyArgs -> bindArgs\"]\n    F --> I[\"bound query + args\"]\n    G --> I\n    H --> I\n    I --> J[\"Exec / Query / QueryRow on prepared or ad-hoc Stmt\"]"
                },
                {
                  "label": "named-queries.md:82",
                  "quote": "`bindNamedMapper(bindType int, query string, arg interface{}, m *reflectx.Mapper)` (`named.go#L421-L436`) examines the runtime type of `arg` and dispatches to one of the three concrete binders:\n\n- **map with string keys** → `bindMap`\n- **array or slice** → `bindArray`\n- **everything else (struct)** → `bindStruct`\n\n`bindMap` (`named.go#L304-L312`), `bindStruct` (`named.go#L213-L225`), and `bindArray` (`named.go#L273-L301`) each call `compileNamedQuery` and then bind the name list to the argument. The three share a shape: compile the query, bind names to values, return the rebound query plus the argument slice."
                }
              ],
              "sources": [
                {
                  "label": "named.go:421",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L421"
                },
                {
                  "label": "named.go:273",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L273"
                },
                {
                  "label": "named.go:451",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L451"
                }
              ],
              "correctionCase": null
            },
            "G": {
              "status": "missing",
              "finding": "未找到原生打包的 prefix、显式缺口、suffix 与匹配答案；实际实现代码本身不等同补全题。",
              "checkpoint": "完整原始Wiki是否已有prefix、显式缺口、suffix、参考答案成套对象；仅实现、代码省略号或示例不算补全题。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "partial",
              "finding": "给出TestIn/安全扫描的条件清单及测试定位，但未展开所选变换的具体查询+实参+期望组合；不能从外部源测试补造Wiki中的样例。",
              "checkpoint": "Rebind/In/批绑定或safe扫描的具体查询/实参与明确预期输出、结果数量或断言成对；测试文件名、条件清单和建议本身不足。",
              "excerpts": [
                {
                  "label": "bindvar-system.md:129",
                  "quote": "`TestIn` (`sqlx_test.go#L1507-L1605`) exercises:\n- normal multi-placeholder expansion with mixed scalar/`[]int`/`[]string`/`[]byte`/`sql.NullString` args, asserting the flattened arg count equals the number of `?` in the result;\n- **too many bindvars with a slice present** → error during parse;\n- **empty slice** → error before parse;\n- **too few bindvars** → error;\n- the \"too many bindVars but no slices\" short-circuit returning the query unchanged;\n- a live end-to-end `IN` query through `Rebind` + `Select`."
                }
              ],
              "sources": [
                {
                  "label": "sqlx_test.go:1514",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L1514"
                },
                {
                  "label": "sqlx_test.go:264",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L264"
                }
              ],
              "correctionCase": null
            },
            "I": {
              "status": "partial",
              "finding": "引用历史BenchmarkBindSpeed的11/50.8/27.5 ns/op，源码中确有对应历史记录；Wiki未携带OS/架构/命令等执行上下文。这不是本轮实测，也不等于完全无结果材料。",
              "checkpoint": "带例子与执行上下文的实际记录；对所有工具同查BenchmarkBindSpeed及11/50.8/27.5 ns/op。可溯历史数字但Wiki未载上下文为partial，明确非本轮实测；测试/CI定义不是记录。",
              "excerpts": [
                {
                  "label": "bindvar-system.md:57",
                  "quote": "`BindDriver` is a public extension point: it lets users register a new driver at runtime or override sqlx's default for an existing driver. The `sync.Map` indirection costs roughly **~40ns per lookup** relative to the old fixed switch, which is documented in `README.md` as the price of making the registry user-extensible. `bind_test.go` includes `BenchmarkBindSpeed` comparing the old switch-based resolution (~11 ns/op) against the `sync.Map` path (~50.8 ns/op in one run, ~27.5 ns/op with an atomic value map)."
                }
              ],
              "sources": [
                {
                  "label": "bind_test.go:24",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/bind_test.go#L24"
                }
              ],
              "correctionCase": null
            },
            "J": {
              "status": "yes",
              "finding": "所检绑定、fixBound、Schema和safe检查自带准确文件/符号/行号；这些指针能追踪错误代码和正确条件，不是由审计者补加来源。",
              "checkpoint": "Wiki自带指针能否把所检接口、变换、边界与测试追到固定源码文件及符号/行号；不以审计者补加来源代替Wiki自身来源。",
              "excerpts": [
                {
                  "label": "bindvar-system.md:61",
                  "quote": "`Rebind(bindType int, query string) string` (`bind.go#L59-L90`) transforms a query written with `?` placeholders into the target dialect. For `QUESTION` and `UNKNOWN` it is a **passthrough** — the query is returned unchanged (`bind.go#L61-L64`) because the input dialect already matches.\n\nFor the other dialects it scans the string left to right, locating each `?` with `strings.Index`, appending the text up to it, then writing the dialect's marker followed by a running 1-based parameter index:\n\n- **DOLLAR** → writes `$` then the index: `$1`, `$2`, ...\n- **NAMED** → writes `:arg` then the index: `:arg1`, `:arg2`, ...\n- **AT** → writes `@p` then the index: `@p1`, `@p2`, ...\n\nThe buffer is pre-sized to `len(query)+10` to avoid reallocation for small query counts. `TestRebind` (`sqlx_test.go#L1318-L1357`) verifies the exact output for DOLLAR, AT, and NAMED across multi-row, quoted-string cases."
                },
                {
                  "label": "named-queries.md:92",
                  "quote": "`bindArray` (`named.go#L273-L301`) supports bulk inserts from a slice or array of structs or maps. Its algorithm:\n\n1. Compile the query with `QUESTION` bind type regardless of the target type, record the name list, and record the slice length.\n2. An empty slice returns the error `\"length of array is 0: ...\"`.\n3. For each element, `bindAnyArgs` produces that element's argument list, which are concatenated into a single flat `arglist` sized `len(names) * arrayLen`.\n4. If there is more than one element, **`fixBound`** replicates the `VALUES(...)` clause `arrayLen` times so the parameter count matches the flattened argument list.\n5. If the original bind type was not `QUESTION`, the expanded query is rewritten at the end with `Rebind(bindType, bound)`.\n\n`fixBound(bound string, loop int)` (`named.go#L245-L269`) finds the `) VALUES (` token via the case-insensitive `valuesReg` regexp (`named.go#L227`), locates the matching closing bracket with `findMatchingClosingBracketIndex` (a bracket-depth counter, `named.go#L229-L243`), and repeats everything between the opening and closing bracket `loop-1` extra times, comma-separated, while preserving any SQL after the clause. It is defensive: if `VALUES (...)` or a closing bracket is not found, the query is returned unchanged. `fixBound` is exercised directly by `TestFixBounds` (`named_test.go#L305+`), which covers matching, trailers, lowercase `values`, `ON DUPLICATE KEY UPDATE ... VALUES(a)` collisions, nested function calls like `YEAR(NOW())`, and missing-bracket guard cases."
                }
              ],
              "sources": [
                {
                  "label": "named.go:245",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/named.go#L245"
                },
                {
                  "label": "sqlx.go:620",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx.go#L620"
                },
                {
                  "label": "sqlx_test.go:100",
                  "url": "https://github.com/jmoiron/sqlx/blob/41dac167fdad5e3fd81d66cafba0951dc6823a30/sqlx_test.go#L100"
                }
              ],
              "correctionCase": null
            }
          }
        },
        "codewiki": {
          "available": false,
          "cells": {
            "A": {
              "status": "no_artifact",
              "finding": "本轮 CodeWiki 未生成 sqlx 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "Rebind、Connect 及所选安全扫描路径/isUnsafe 的实际连续实现上下文；不能以使用例或流程图替代，合并Go type-switch case后访问interface字段等误写须修正。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "B": {
              "status": "no_artifact",
              "finding": "本轮 CodeWiki 未生成 sqlx 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "Connect(driverName,dataSourceName) 返回 (*DB,error)，有效调用需处理两值；MustConnect 返回一个 *DB 并在错误时panic，不能写成返回error。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "C": {
              "status": "no_artifact",
              "finding": "本轮 CodeWiki 未生成 sqlx 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "Rebind的QUESTION/UNKNOWN原样返回与DOLLAR/NAMED/AT输出；生产fixBound复制VALUES组、未匹配/未闭合时返回原串；Schema的引号/时间函数改写只在测试，不是自动SQL方言/分页转换层。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "D": {
              "status": "no_artifact",
              "finding": "本轮 CodeWiki 未生成 sqlx 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "safe扫描只因结果列无目的字段而报错，目的字段未被SELECT并不因此报错；Unsafe仅跳过该检查；fixBound未找到VALUES/闭括号返回原串而非提前报错。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "E": {
              "status": "no_artifact",
              "finding": "本轮 CodeWiki 未生成 sqlx 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "Connect先Open再Ping；Open失败不继续Ping，Ping失败须Close并返回nil,error。扫描缓存/关闭说明作为相关上下文，不替代这条初始化/清理顺序。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "F": {
              "status": "no_artifact",
              "finding": "本轮 CodeWiki 未生成 sqlx 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "NamedExec→bindNamedMapper按实参类型分派→bindArray先编译QUESTION并取参→fixBound→必要时Rebind→e.Exec；区分生产named.go调用链与sqlx_test.go的Schema适配，不虚构预驱动错误。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "G": {
              "status": "no_artifact",
              "finding": "本轮 CodeWiki 未生成 sqlx 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "完整原始Wiki是否已有prefix、显式缺口、suffix、参考答案成套对象；仅实现、代码省略号或示例不算补全题。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "H": {
              "status": "no_artifact",
              "finding": "本轮 CodeWiki 未生成 sqlx 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "Rebind/In/批绑定或safe扫描的具体查询/实参与明确预期输出、结果数量或断言成对；测试文件名、条件清单和建议本身不足。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "I": {
              "status": "no_artifact",
              "finding": "本轮 CodeWiki 未生成 sqlx 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "带例子与执行上下文的实际记录；对所有工具同查BenchmarkBindSpeed及11/50.8/27.5 ns/op。可溯历史数字但Wiki未载上下文为partial，明确非本轮实测；测试/CI定义不是记录。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            },
            "J": {
              "status": "no_artifact",
              "finding": "本轮 CodeWiki 未生成 sqlx 的可审查 Wiki 工件；不是内容缺失。",
              "checkpoint": "Wiki自带指针能否把所检接口、变换、边界与测试追到固定源码文件及符号/行号；不以审计者补加来源代替Wiki自身来源。",
              "excerpts": [],
              "sources": [],
              "correctionCase": null
            }
          }
        }
      }
    }
  ]
};
