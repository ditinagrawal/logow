"use client"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Redo2, Undo2 } from "lucide-react"
import { useHistory } from "./history-context"

export function HistoryControls() {
    const { canUndo, canRedo, undo, redo } = useHistory()

    return (
        <TooltipProvider>
            <div className="flex gap-1">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={undo}
                            disabled={!canUndo}
                            className="h-8 w-8"
                        >
                            <Undo2 size={16} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Undo (Ctrl+Z)</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={redo}
                            disabled={!canRedo}
                            className="h-8 w-8"
                        >
                            <Redo2 size={16} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Redo (Ctrl+Y)</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    )
}