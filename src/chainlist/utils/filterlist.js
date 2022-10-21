import {OUTER_CHAIN_LIST} from "../../../const/rpcs";

export function filterSearchList(list, searchText){
    let chains = list.filter((chain) => {
        //filter
        if( chain.chainId.toString().toLowerCase().includes(searchText.toLowerCase())){
            return true
        }
        if(chain.name.toLowerCase().includes(searchText.toLowerCase())){
            return true
        }
        if((chain.nativeCurrency ? chain.nativeCurrency.symbol : "").toLowerCase().includes(searchText.toLowerCase())){
            return true
        }
    })
    return chains
}


export function filterTestList(list,isTest){
    if (isTest) {
        return list
    }
    let result = list.filter((item) => {
        const testnet =
            item.name?.toLowerCase().includes("test") ||
            item.title?.toLowerCase().includes("test") ||
            item.network?.toLowerCase().includes("test");
        return !testnet;
    });
    return result;
}

export function classifyChains(list, innerChainIDs){
    let innerList = [];
    let outerList = [];
    list.map(item => {
        let chainId = item.chainId.toString();

        //window.info("map", innerChainIDs, 'innerChainIDs', 'chainId', chainId)
        if(innerChainIDs.includes(chainId)){
            item.isInner = true
            innerList.push(item)
        }else {
            item.isInner = false
            outerList.push(item)
        }

        //window.info("item", item)
    })
    return {
        inner: innerList,
        outer: outerList,
        total: [...innerList, ...outerList]
    }
}

export function getRpcFilterOptions(filterClassifyList){
    let list = filterClassifyList.map((item, index) => {
        const {name, chainId} = item;
        return {
            text: (
                <span style={{width: 320,  display: 'inline-block'}}>
                    <span
                        style={{
                            display: 'inline-block',
                            width: 180,
                            textOverflow: 'ellipsis',
                            overflow: 'hidden' ,
                            whiteSpace: "nowrap"
                        }}
                    >
                        {name}
                    </span>
                    <span
                        style={{
                            textAlign: 'right',
                            width: 130,
                            display: 'inline-block'
                        }}
                    >
                        &emsp;{chainId}&nbsp;
                    </span>
                </span>
            ),
            value: name
        }
    })

    return list;
}
