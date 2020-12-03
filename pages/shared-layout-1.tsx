import { useMemo, useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

import { Card, Cards, Overlay, OverlayWrapper } from '../styles/shared-layout-1'

const items = [
  {
    id: '1',
    title: 'Test 1',
    subtitle: 'Description 1'
  },
  {
    id: '2',
    title: 'Test 2',
    subtitle: 'Description 2'
  },
  {
    id: '3',
    title: 'Test 3',
    subtitle: 'Description 3'
  },
  {
    id: '4',
    title: 'Test 4',
    subtitle: 'Description 4'
  },
  {
    id: '5',
    title: 'Test 5',
    subtitle: 'Description 5'
  },
  {
    id: '6',
    title: 'Test 6',
    subtitle: 'Description 6'
  }
]

const FirstSharedLayout: React.FC = () => {
  const [selectedId, setSelectedId] = useState(null)

  const selectedItem = useMemo(() => {
    if (!selectedId) {
      return null
    }

    return items.find(item => item.id === selectedId)
  }, [selectedId])

  return (
    <AnimateSharedLayout type="crossfade">
      <Cards>
        {items.map(item => (
          <Card
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
          >
            <motion.h2>{item.title}</motion.h2>
            <motion.h5>{item.subtitle}</motion.h5>
          </Card>
        ))}
      </Cards>

      <AnimatePresence>
        {selectedItem && (
          <>
            <Overlay
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <OverlayWrapper>
              <Card layoutId={selectedItem.id}>
                <motion.h2>{selectedItem.title}</motion.h2>
                <motion.h5>{selectedItem.subtitle}</motion.h5>
              </Card>
            </OverlayWrapper>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default FirstSharedLayout
